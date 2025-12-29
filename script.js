// 大模型相关博客文章数据
const blogPosts = [
    {
        id: 1,
        title: "什么是大语言模型？从GPT到ChatGPT的发展历程",
        date: "2024-12-29",
        category: "基础理论",
        excerpt: "深入了解大语言模型的基本概念、发展历程和核心技术。从最初的GPT模型到现在的ChatGPT，探索这一技术革命的演进过程。",
        content: `
            <h2>什么是大语言模型？</h2>
            <p>大语言模型（Large Language Model, LLM）是一种基于深度学习的人工智能模型，专门用于理解和生成人类语言。这些模型通过在大量文本数据上进行训练，学会了语言的模式、语法和语义。</p>
            
            <h3>核心特征</h3>
            <ul>
                <li><strong>规模庞大</strong>：通常包含数十亿甚至数千亿个参数</li>
                <li><strong>预训练</strong>：在大规模无标注文本数据上进行预训练</li>
                <li><strong>通用性</strong>：可以处理多种自然语言处理任务</li>
                <li><strong>上下文理解</strong>：能够理解长文本的上下文关系</li>
            </ul>
            
            <h3>发展历程</h3>
            <div class="info-box">
                <strong>2018年</strong> - GPT-1发布，参数量1.17亿<br>
                <strong>2019年</strong> - GPT-2发布，参数量15亿<br>
                <strong>2020年</strong> - GPT-3发布，参数量1750亿<br>
                <strong>2022年</strong> - ChatGPT发布，基于GPT-3.5<br>
                <strong>2023年</strong> - GPT-4发布，多模态能力
            </div>
            
            <h3>技术原理</h3>
            <p>大语言模型主要基于Transformer架构，使用自注意力机制来处理序列数据。训练过程分为两个阶段：</p>
            <ol>
                <li><strong>预训练阶段</strong>：在大量文本上学习语言的统计规律</li>
                <li><strong>微调阶段</strong>：针对特定任务进行优化</li>
            </ol>
            
            <blockquote>
                大语言模型的成功不仅在于其技术突破，更在于它们展现出的涌现能力——当模型规模达到一定程度时，会自发地表现出一些训练时未明确教授的能力。
            </blockquote>
        `
    },
    {
        id: 2,
        title: "Transformer架构详解：注意力机制的革命",
        date: "2024-12-28",
        category: "技术实现",
        excerpt: "深入解析Transformer架构的核心组件，包括自注意力机制、位置编码、多头注意力等关键技术，理解现代大模型的技术基础。",
        content: `
            <h2>Transformer：改变NLP的架构</h2>
            <p>Transformer架构由Google在2017年的论文《Attention Is All You Need》中提出，彻底改变了自然语言处理领域。它摒弃了传统的循环神经网络，完全基于注意力机制构建。</p>
            
            <h3>核心创新：自注意力机制</h3>
            <p>自注意力机制允许模型在处理序列中的每个位置时，都能关注到序列中的所有其他位置。这解决了RNN的长距离依赖问题。</p>
            
            <div class="math-formula">
                Attention(Q,K,V) = softmax(QK^T/√d_k)V
            </div>
            
            <p>其中：</p>
            <ul>
                <li>Q (Query)：查询矩阵</li>
                <li>K (Key)：键矩阵</li>
                <li>V (Value)：值矩阵</li>
                <li>d_k：键向量的维度</li>
            </ul>
            
            <h3>架构组件</h3>
            
            <h4>1. 多头注意力 (Multi-Head Attention)</h4>
            <p>将注意力机制并行运行多次，每个"头"学习不同的表示子空间：</p>
            <pre><code>MultiHead(Q,K,V) = Concat(head_1,...,head_h)W^O
where head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)</code></pre>
            
            <h4>2. 位置编码 (Positional Encoding)</h4>
            <p>由于Transformer没有循环结构，需要显式地添加位置信息：</p>
            <pre><code>PE(pos, 2i) = sin(pos/10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos/10000^(2i/d_model))</code></pre>
            
            <h4>3. 前馈网络 (Feed Forward)</h4>
            <p>每个注意力层后都跟着一个前馈网络：</p>
            <pre><code>FFN(x) = max(0, xW_1 + b_1)W_2 + b_2</code></pre>
            
            <div class="success-box">
                <strong>优势总结：</strong><br>
                • 并行化训练，效率更高<br>
                • 长距离依赖建模能力强<br>
                • 可解释性较好<br>
                • 易于扩展到大规模模型
            </div>
            
            <h3>在大模型中的应用</h3>
            <p>现代大语言模型如GPT系列、BERT、T5等都基于Transformer架构。GPT使用了Transformer的解码器部分，而BERT使用了编码器部分。</p>
        `
    },
    {
        id: 3,
        title: "ChatGPT的训练过程：从预训练到RLHF",
        date: "2024-12-27",
        category: "技术实现",
        excerpt: "详细介绍ChatGPT的完整训练流程，包括预训练、监督微调和基于人类反馈的强化学习(RLHF)三个关键阶段。",
        content: `
            <h2>ChatGPT的三阶段训练</h2>
            <p>ChatGPT的成功不仅在于其强大的基础模型，更在于其独特的训练方法。整个训练过程分为三个关键阶段。</p>
            
            <h3>阶段一：预训练 (Pre-training)</h3>
            <p>在大规模文本语料库上进行无监督学习，学习语言的基本模式和知识。</p>
            
            <div class="info-box">
                <strong>训练数据：</strong>包括网页、书籍、文章等多种来源的文本，总量达到数万亿个token
            </div>
            
            <ul>
                <li><strong>目标</strong>：下一个词预测 (Next Token Prediction)</li>
                <li><strong>损失函数</strong>：交叉熵损失</li>
                <li><strong>优化器</strong>：AdamW</li>
                <li><strong>学习率调度</strong>：余弦退火</li>
            </ul>
            
            <h3>阶段二：监督微调 (Supervised Fine-Tuning, SFT)</h3>
            <p>使用高质量的指令-回答对数据集对模型进行微调，教会模型如何遵循指令。</p>
            
            <pre><code># 示例训练数据格式
{
    "instruction": "解释什么是机器学习",
    "input": "",
    "output": "机器学习是人工智能的一个分支..."
}</code></pre>
            
            <h3>阶段三：基于人类反馈的强化学习 (RLHF)</h3>
            <p>这是ChatGPT最关键的创新，通过人类反馈来优化模型的输出质量。</p>
            
            <h4>RLHF的三个步骤：</h4>
            <ol>
                <li><strong>收集比较数据</strong>：人类标注员对模型输出进行排序</li>
                <li><strong>训练奖励模型</strong>：学习人类的偏好</li>
                <li><strong>PPO优化</strong>：使用近端策略优化算法微调模型</li>
            </ol>
            
            <div class="warning-box">
                <strong>注意：</strong>RLHF过程需要大量的人工标注工作，这也是ChatGPT训练成本高昂的原因之一。
            </div>
            
            <h3>关键技术细节</h3>
            
            <h4>奖励模型 (Reward Model)</h4>
            <p>奖励模型学习预测人类对模型输出的偏好评分：</p>
            <pre><code>r_θ(x, y) = 奖励模型对输入x和输出y的评分</code></pre>
            
            <h4>PPO算法</h4>
            <p>近端策略优化确保训练过程的稳定性：</p>
            <div class="math-formula">
                L^{CLIP}(θ) = E[min(r_t(θ)Â_t, clip(r_t(θ), 1-ε, 1+ε)Â_t)]
            </div>
            
            <h3>训练效果</h3>
            <p>通过这三个阶段的训练，ChatGPT获得了以下能力：</p>
            <ul>
                <li>更好的指令遵循能力</li>
                <li>更安全、更有用的回答</li>
                <li>减少有害或不准确的输出</li>
                <li>更符合人类价值观的行为</li>
            </ul>
            
            <blockquote>
                RLHF的成功证明了人类反馈在AI系统对齐中的重要作用，这一方法现在已经成为训练大语言模型的标准流程。
            </blockquote>
        `
    },
    {
        id: 4,
        title: "大模型的实际应用：从文本生成到代码编程",
        date: "2024-12-26",
        category: "应用案例",
        excerpt: "探索大语言模型在各个领域的实际应用，包括内容创作、代码生成、数据分析、教育辅助等多个场景的具体案例和最佳实践。",
        content: `
            <h2>大模型的广泛应用</h2>
            <p>大语言模型已经从实验室走向了实际应用，在各个行业和领域都展现出了巨大的潜力。让我们看看一些具体的应用场景。</p>
            
            <h3>1. 内容创作与写作辅助</h3>
            
            <h4>应用场景：</h4>
            <ul>
                <li>文章写作和编辑</li>
                <li>营销文案生成</li>
                <li>创意写作辅助</li>
                <li>多语言翻译</li>
            </ul>
            
            <div class="success-box">
                <strong>案例：</strong>某媒体公司使用GPT-4辅助记者写作，将文章初稿生成时间从2小时缩短到30分钟，同时保持了高质量的内容输出。
            </div>
            
            <h3>2. 代码生成与编程辅助</h3>
            
            <h4>主要工具：</h4>
            <ul>
                <li><strong>GitHub Copilot</strong>：基于Codex模型的代码补全</li>
                <li><strong>ChatGPT</strong>：代码解释、调试、重构</li>
                <li><strong>Claude</strong>：复杂算法实现</li>
            </ul>
            
            <pre><code># 示例：使用ChatGPT生成Python函数
def fibonacci(n):
    """生成斐波那契数列的前n项"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib</code></pre>
            
            <h3>3. 教育与学习辅助</h3>
            
            <h4>应用形式：</h4>
            <ul>
                <li>个性化学习助手</li>
                <li>作业辅导和答疑</li>
                <li>知识点解释</li>
                <li>学习计划制定</li>
            </ul>
            
            <div class="info-box">
                <strong>教育优势：</strong><br>
                • 24/7可用的学习伙伴<br>
                • 个性化的解释方式<br>
                • 多学科知识覆盖<br>
                • 互动式学习体验
            </div>
            
            <h3>4. 客户服务与支持</h3>
            
            <h4>实现方式：</h4>
            <ul>
                <li>智能客服机器人</li>
                <li>FAQ自动回答</li>
                <li>问题分类和路由</li>
                <li>多轮对话处理</li>
            </ul>
            
            <h3>5. 数据分析与洞察</h3>
            
            <h4>应用场景：</h4>
            <ul>
                <li>自然语言查询数据库</li>
                <li>报告自动生成</li>
                <li>数据可视化建议</li>
                <li>趋势分析解释</li>
            </ul>
            
            <pre><code># 示例：自然语言转SQL查询
用户输入："显示去年销售额最高的前5个产品"
生成SQL：
SELECT product_name, SUM(sales_amount) as total_sales
FROM sales 
WHERE sale_date >= '2023-01-01' AND sale_date < '2024-01-01'
GROUP BY product_name
ORDER BY total_sales DESC
LIMIT 5;</code></pre>
            
            <h3>6. 创意设计与艺术</h3>
            
            <h4>应用领域：</h4>
            <ul>
                <li>广告创意生成</li>
                <li>故事情节构思</li>
                <li>游戏对话设计</li>
                <li>音乐歌词创作</li>
            </ul>
            
            <h3>实施最佳实践</h3>
            
            <div class="warning-box">
                <strong>注意事项：</strong><br>
                • 始终验证生成内容的准确性<br>
                • 保护敏感数据和隐私<br>
                • 建立人工审核机制<br>
                • 持续监控和优化效果
            </div>
            
            <h4>成功要素：</h4>
            <ol>
                <li><strong>明确的提示工程</strong>：设计清晰、具体的指令</li>
                <li><strong>上下文管理</strong>：提供足够的背景信息</li>
                <li><strong>输出验证</strong>：建立质量检查机制</li>
                <li><strong>持续优化</strong>：根据反馈改进系统</li>
            </ol>
            
            <blockquote>
                大模型的真正价值不在于替代人类，而在于增强人类的能力，让我们能够更高效地完成复杂任务，专注于更有创造性的工作。
            </blockquote>
        `
    },
    {
        id: 5,
        title: "如何使用Hugging Face构建你的第一个大模型应用",
        date: "2024-12-25",
        category: "工具教程",
        excerpt: "从零开始学习使用Hugging Face Transformers库，包括模型加载、推理、微调等核心功能，快速构建自己的AI应用。",
        content: `
            <h2>Hugging Face：大模型的开源生态</h2>
            <p>Hugging Face是目前最受欢迎的开源机器学习平台，提供了丰富的预训练模型和易用的工具库。让我们从基础开始，学习如何使用它构建AI应用。</p>
            
            <h3>环境准备</h3>
            
            <h4>安装必要的库：</h4>
            <pre><code>pip install transformers torch torchvision torchaudio
pip install datasets accelerate
pip install gradio  # 用于构建Web界面</code></pre>
            
            <h3>第一个示例：文本生成</h3>
            
            <pre><code>from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

# 加载模型和分词器
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# 设置pad_token
tokenizer.pad_token = tokenizer.eos_token

def generate_response(input_text, max_length=100):
    # 编码输入
    inputs = tokenizer.encode(input_text + tokenizer.eos_token, 
                            return_tensors='pt')
    
    # 生成回复
    with torch.no_grad():
        outputs = model.generate(
            inputs,
            max_length=max_length,
            num_return_sequences=1,
            temperature=0.7,
            pad_token_id=tokenizer.eos_token_id,
            do_sample=True
        )
    
    # 解码输出
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response[len(input_text):].strip()

# 测试
print(generate_response("你好，今天天气怎么样？"))</code></pre>
            
            <h3>文本分类示例</h3>
            
            <pre><code>from transformers import pipeline

# 创建情感分析管道
classifier = pipeline("sentiment-analysis", 
                     model="cardiffnlp/twitter-roberta-base-sentiment-latest")

# 分析文本情感
texts = [
    "我今天心情很好！",
    "这个产品质量太差了。",
    "天气不错，适合出门。"
]

for text in texts:
    result = classifier(text)
    print(f"文本: {text}")
    print(f"情感: {result[0]['label']}, 置信度: {result[0]['score']:.4f}")
    print("-" * 50)</code></pre>
            
            <h3>构建Web应用界面</h3>
            
            <p>使用Gradio快速创建用户友好的界面：</p>
            
            <pre><code>import gradio as gr
from transformers import pipeline

# 初始化模型
generator = pipeline("text-generation", 
                    model="gpt2",
                    max_length=100)

def generate_text(prompt, max_length, temperature):
    """生成文本的函数"""
    result = generator(
        prompt,
        max_length=max_length,
        temperature=temperature,
        num_return_sequences=1,
        pad_token_id=generator.tokenizer.eos_token_id
    )
    return result[0]['generated_text']

# 创建Gradio界面
interface = gr.Interface(
    fn=generate_text,
    inputs=[
        gr.Textbox(label="输入提示文本", placeholder="请输入您的提示..."),
        gr.Slider(minimum=50, maximum=200, value=100, label="最大长度"),
        gr.Slider(minimum=0.1, maximum=2.0, value=0.7, label="创造性(温度)")
    ],
    outputs=gr.Textbox(label="生成的文本"),
    title="AI文本生成器",
    description="使用GPT-2模型生成文本"
)

# 启动应用
interface.launch()</code></pre>
            
            <h3>模型微调基础</h3>
            
            <h4>准备数据：</h4>
            <pre><code>from datasets import Dataset
import pandas as pd

# 准备训练数据
data = {
    'text': [
        "这是一个正面的评论，产品很好用。",
        "这个服务态度很差，不推荐。",
        "质量不错，值得购买。",
        # 更多数据...
    ],
    'label': [1, 0, 1]  # 1为正面，0为负面
}

# 创建数据集
dataset = Dataset.from_pandas(pd.DataFrame(data))</code></pre>
            
            <h4>微调过程：</h4>
            <pre><code>from transformers import (
    AutoTokenizer, AutoModelForSequenceClassification,
    TrainingArguments, Trainer
)

# 加载模型和分词器
model_name = "bert-base-chinese"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, 
    num_labels=2
)

# 数据预处理
def tokenize_function(examples):
    return tokenizer(examples['text'], 
                    truncation=True, 
                    padding=True, 
                    max_length=128)

tokenized_dataset = dataset.map(tokenize_function, batched=True)

# 训练参数
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=64,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir='./logs',
)

# 创建训练器
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset,
    tokenizer=tokenizer,
)

# 开始训练
trainer.train()</code></pre>
            
            <h3>实用技巧</h3>
            
            <div class="info-box">
                <strong>性能优化建议：</strong><br>
                • 使用GPU加速训练和推理<br>
                • 合理设置batch_size避免内存溢出<br>
                • 使用混合精度训练节省显存<br>
                • 考虑使用量化模型减少资源消耗
            </div>
            
            <h4>常见问题解决：</h4>
            <ul>
                <li><strong>内存不足</strong>：减小batch_size或使用gradient_checkpointing</li>
                <li><strong>训练速度慢</strong>：使用多GPU训练或云端GPU</li>
                <li><strong>模型效果差</strong>：增加训练数据或调整超参数</li>
            </ul>
            
            <h3>部署到生产环境</h3>
            
            <pre><code># 保存模型
model.save_pretrained("./my-fine-tuned-model")
tokenizer.save_pretrained("./my-fine-tuned-model")

# 加载并使用
from transformers import pipeline
classifier = pipeline("sentiment-analysis", 
                     model="./my-fine-tuned-model")

# API服务示例
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    text = request.json['text']
    result = classifier(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</code></pre>
            
            <div class="success-box">
                <strong>恭喜！</strong>你已经学会了使用Hugging Face构建基本的大模型应用。继续探索更多模型和功能，构建属于你的AI应用吧！
            </div>
        `
    }
];

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
    setupNavigation();
    setupScrollAnimations();
});

// 加载博客文章
function loadBlogPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

// 创建文章元素
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-item fade-in';
    postDiv.onclick = () => openArticle(post.id); // 改为跳转到文章页面
    
    // 提取文章内容的纯文本并截取前50字
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    const excerpt = plainText.substring(0, 50) + (plainText.length > 50 ? '...' : '');
    
    postDiv.innerHTML = `
        <div class="post-header">
            <h3 class="post-title">${post.title}</h3>
            <div class="post-meta">
                <span class="post-category">${post.category}</span>
                <span class="post-date">${formatDate(post.date)}</span>
            </div>
        </div>
        <p class="post-excerpt">${excerpt}</p>
    `;
    
    return postDiv;
}

// 跳转到文章页面
function openArticle(articleId) {
    window.location.href = `article.html?id=${articleId}`;
}
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 打开文章详情
function openPost(post) {
    // 创建模态框显示文章内容
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${post.title}</h2>
            <div class="post-date">${formatDate(post.date)}</div>
            <div class="post-content">${post.content}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加模态框样式
    if (!document.getElementById('modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal {
                display: block;
                position: fixed;
                z-index: 2000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background-color: white;
                margin: 5% auto;
                padding: 2rem;
                border-radius: 12px;
                width: 90%;
                max-width: 800px;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            }
            
            .close {
                position: absolute;
                right: 1rem;
                top: 1rem;
                font-size: 2rem;
                cursor: pointer;
                color: #666;
            }
            
            .close:hover {
                color: #333;
            }
            
            .post-content h2, .post-content h3 {
                margin: 1.5rem 0 1rem 0;
                color: #1f2937;
            }
            
            .post-content p {
                margin-bottom: 1rem;
                line-height: 1.6;
                color: #4b5563;
            }
            
            .post-content ul {
                margin: 1rem 0;
                padding-left: 2rem;
            }
            
            .post-content li {
                margin-bottom: 0.5rem;
                color: #4b5563;
            }
        `;
        document.head.appendChild(modalStyles);
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// 设置导航
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            // 滚动到对应部分
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 设置滚动动画
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.post-item').forEach(item => {
        observer.observe(item);
    });
}

// 点击模态框外部关闭
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});



// 增强的模态框样式
function enhanceModalStyles() {
    if (!document.getElementById('enhanced-modal-styles')) {
        const enhancedStyles = document.createElement('style');
        enhancedStyles.id = 'enhanced-modal-styles';
        enhancedStyles.textContent = `
            .modal-content {
                background-color: white;
                margin: 2% auto;
                padding: 0;
                border-radius: 12px;
                width: 95%;
                max-width: 900px;
                max-height: 90vh;
                overflow: hidden;
                position: relative;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            }
            
            .modal-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 2rem;
                position: relative;
            }
            
            .modal-body {
                padding: 2rem;
                overflow-y: auto;
                max-height: calc(90vh - 200px);
            }
            
            .modal-title {
                font-size: 1.8rem;
                font-weight: 600;
                margin: 0;
                line-height: 1.3;
            }
            
            .modal-meta {
                margin-top: 1rem;
                opacity: 0.9;
                display: flex;
                gap: 1rem;
                align-items: center;
            }
            
            .modal-category {
                background: rgba(255, 255, 255, 0.2);
                padding: 0.25rem 0.75rem;
                border-radius: 12px;
                font-size: 0.8rem;
            }
            
            .close {
                position: absolute;
                right: 1.5rem;
                top: 1.5rem;
                font-size: 2rem;
                cursor: pointer;
                color: rgba(255, 255, 255, 0.8);
                transition: color 0.3s ease;
                z-index: 10;
            }
            
            .close:hover {
                color: white;
            }
        `;
        document.head.appendChild(enhancedStyles);
    }
}

// 更新打开文章函数
function openPost(post) {
    enhanceModalStyles();
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2 class="modal-title">${post.title}</h2>
                <div class="modal-meta">
                    <span class="modal-category">${post.category}</span>
                    <span>${formatDate(post.date)}</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="post-content">${post.content}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
}

// 更新关闭模态框函数
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}