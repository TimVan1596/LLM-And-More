# RAG场景指南

## 概览
本指南涵盖RAG场景训练、模型合并（LoRA checkpoint）、评估和应用的完整流程。请根据实际需求选择相应的模型，并按照以下步骤进行操作。

## 环境准备和参数设置
1. **参数调整**: 在`1train.sh`脚本中根据需要调整以下参数：
   - `--train_path`: 训练数据存储路径。可支持多文档和单文档的json、jsonl格式。
   - `--enhancement`: 是否开启数据增强，如不需要或已增强请设置为`False`
   - `--model_name_or_path`: 基座Base模型存储路径。
   - `--merge_lora` : 是否开启LoRA checkpoint合并，如不需要请设置为`False`。
   - `--load_in_kbits` : QLoRA级别，可选`4`、`8`、`16`，默认为`16`不启用。
   - `--mode`: 基座Base模型类型。可选项包括：
     - `glm`: ChatGLM
     - `glm2`: ChatGLM2
     - `glm3`: ChatGLM3
     - `glm3_32k`: ChatGLM3_32k
     - `baichuan2_13b`: Baichuan2-13B
     - `auto`: Llama2

## 训练步骤
### 1. 训练模型 (`1train.sh`)
- **训练数据**: 使用rag场景的数据集。
  - 数据需包含`instruction` `document` `question` `output` 字段。
  - 可使用`data_preparation.py`中的`prepare_rag_dataset`函数自定义构建`instruction`。
  - 可使用`data_preparation.py`中的`data_enhancement`函数自定义进行训练数据的增强，或使用`--enhancement`参数决定是否启用。
- **检索设置**:                
  - 可使用`--retrieval_method`参数选择检索方式，默认为`st`。 
  - 可使用`--top_k`参数设置检索返回的文档数量，默认为`1`。
  - 可使用`--st`参数设置检索模型，默认为`BAAI/bge-large-zh-v1.5`,建议训练前提前下载。   
- **显卡选择**: 根据实际情况调整`--include localhost`后的数字，用逗号隔开表示使用的显卡编号。
- **批次大小调整**: 如果显存不足，请适当降低`--per_device_train_batch_size`的值。
- **开始训练**: 运行命令`bash 1train.sh`。训练完成后，结果将保存在`output_model`文件夹中。



## 评估和应用
### 2. 模型评估 (`2score.sh`)
- `--test_path`: 评估的数据集路径。
- `--output_test`: 模型预测输出结果的txt文件。
- 替换`--mode`为对应模型类别，然后执行命令`bash 2score.sh`进行模型评估。
- 运行成功会生成评估结果文件并打印出平均ROUGE、BLEU、ACC和F1分数。

### 3. 应用 (`3rag_run.sh`)
- 执行命令`bash 3rag_run.sh`部署rag应用,目前只支持标准输入流。
  - 输出示例：
  ```json
  {
    "code": 0,
    "msg": "Success",
    "data": 
      {
      "question":"小明是谁？",
      "docs": "背景知识： ",
      "answer": "抱歉，我不知道"
      }
  }
  ```
~~包含对应的`document`和`question`适用于对称语义检索，如没有对应的`question`为非对称语义检索。~~

- `--doc_path` : 检索的文档路径，应包含对应的`document`用于非对称语义检索。
- `--retrieval_method`: 指定使用如下检索方案：["bm25", "sentence_transformers"]，默认为`sentence_transformer`，~~对称语义检索下`bm25`算法资源占用最优，~~非对称语义检索建议使用`sentence_transformers`方案。
- `--rag_history_path `: 对话历史存储文件，可用于后续评估RAG应用
- `--threshold 0.69 `: 拒答的文档得分阈值。
~~- `--sentence_asymmetrical_path`: 对称语义检索模型~~
  ~~- 可选模型：~~

- `--sentence_unsymmetrical_path`: 非对称语义检索模型
  - 可选模型：
    - `BAAI/bge-large-zh-v1.5`
    - `BAAI/bge-base-zh-v1.5`
    - `shibing624/text2vec-base-chinese`
    - `uer/sbert-base-chinese-nli`
    - `sentence-transformers/all-MiniLM-L6-v2`



确保在每一步中根据实际情况调整相应的参数。上述步骤将指导您完成从训练到应用的整个流程。
### 4. QA:


Q---QLoRA微调百川2报错`TypeError: 'BitsAndBytesConfig' object is not subscriptable`

A---在模型目录中找到modeling_baichuan.py修改BaichuanForCausalLM类的__init__方法，将
```
if hasattr(config, "quantization_config") and config.quantization_config['load_in_4bit']:
```
改为
```
if hasattr(config, "quantization_config") and isinstance(config.quantization_config, dict) and config.quantization_config.get('load_in_4bit', False):
```