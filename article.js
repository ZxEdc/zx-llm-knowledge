// 文章数据映射（包含完整内容作为备用）
const articleData = {
    1: {
        title: "什么是大语言模型？从GPT到ChatGPT的发展历程",
        category: "基础理论",
        date: "2024-12-29",
        markdownFile: "articles/what-is-llm.md",
        fallbackContent: `
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
    2: {
        title: "Transformer架构详解：注意力机制的革命",
        category: "技术实现", 
        date: "2024-12-28",
        markdownFile: "articles/transformer-architecture.md",
        fallbackContent: `
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
    3: {
        title: "ChatGPT的训练过程：从预训练到RLHF",
        category: "技术实现",
        date: "2024-12-27",
        markdownFile: "articles/chatgpt-training.md",
        fallbackContent: `
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
            
            <blockquote>
                RLHF的成功证明了人类反馈在AI系统对齐中的重要作用，这一方法现在已经成为训练大语言模型的标准流程。
            </blockquote>
        `
    },
    4: {
        title: "大模型的实际应用：从文本生成到代码编程",
        category: "应用案例",
        date: "2024-12-26",
        markdownFile: "articles/llm-applications.md",
        fallbackContent: `
            <h2>大模型的广泛应用</h2>
            <p>大语言模型已经从实验室走向了实际应用，在各个行业和领域都展现出了巨大的潜力。</p>
            
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
            <div class="info-box">
                <strong>教育优势：</strong><br>
                • 24/7可用的学习伙伴<br>
                • 个性化的解释方式<br>
                • 多学科知识覆盖<br>
                • 互动式学习体验
            </div>
            
            <blockquote>
                大模型的真正价值不在于替代人类，而在于增强人类的能力，让我们能够更高效地完成复杂任务，专注于更有创造性的工作。
            </blockquote>
        `
    },
    5: {
        title: "如何使用Hugging Face构建你的第一个大模型应用",
        category: "工具教程",
        date: "2024-12-25",
        markdownFile: "articles/huggingface-tutorial.md",
        fallbackContent: `
            <h2>Hugging Face：大模型的开源生态</h2>
            <p>Hugging Face是目前最受欢迎的开源机器学习平台，提供了丰富的预训练模型和易用的工具库。</p>
            
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
            do_sample=True
        )
    
    # 解码输出
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response[len(input_text):].strip()</code></pre>
            
            <h3>构建Web应用界面</h3>
            <p>使用Gradio快速创建用户友好的界面：</p>
            
            <pre><code>import gradio as gr
from transformers import pipeline

# 初始化模型
generator = pipeline("text-generation", model="gpt2")

def generate_text(prompt, max_length, temperature):
    result = generator(
        prompt,
        max_length=max_length,
        temperature=temperature,
        num_return_sequences=1
    )
    return result[0]['generated_text']

# 创建Gradio界面
interface = gr.Interface(
    fn=generate_text,
    inputs=[
        gr.Textbox(label="输入提示文本"),
        gr.Slider(minimum=50, maximum=200, value=100, label="最大长度"),
        gr.Slider(minimum=0.1, maximum=2.0, value=0.7, label="创造性")
    ],
    outputs=gr.Textbox(label="生成的文本"),
    title="AI文本生成器"
)

interface.launch()</code></pre>
            
            <div class="success-box">
                <strong>恭喜！</strong>你已经学会了使用Hugging Face构建基本的大模型应用。继续探索更多模型和功能，构建属于你的AI应用吧！
            </div>
        `
    }
};

// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 加载Markdown文件
async function loadMarkdownFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        return markdown;
    } catch (error) {
        console.error('加载Markdown文件失败:', error);
        return `# 文章加载失败\n\n抱歉，无法加载文章内容。请检查文件路径是否正确。\n\n错误信息：${error.message}`;
    }
}

// 渲染Markdown为HTML
function renderMarkdown(markdown) {
    // 配置marked选项
    marked.setOptions({
        highlight: function(code, lang) {
            if (Prism.languages[lang]) {
                return Prism.highlight(code, Prism.languages[lang], lang);
            } else {
                return code;
            }
        },
        breaks: true,
        gfm: true
    });
    
    return marked.parse(markdown);
}

// 处理特殊内容框
function processSpecialBoxes(html) {
    // 处理信息框
    html = html.replace(/:::info\s*([\s\S]*?):::/g, '<div class="info-box">$1</div>');
    html = html.replace(/:::warning\s*([\s\S]*?):::/g, '<div class="warning-box">$1</div>');
    html = html.replace(/:::success\s*([\s\S]*?):::/g, '<div class="success-box">$1</div>');
    
    // 处理数学公式框
    html = html.replace(/:::math\s*([\s\S]*?):::/g, '<div class="math-formula">$1</div>');
    
    return html;
}

// 加载文章内容
async function loadArticle() {
    const articleId = getUrlParameter('id');
    
    if (!articleId || !articleData[articleId]) {
        // 如果没有找到文章，显示错误信息
        document.getElementById('article-title').textContent = '文章未找到';
        document.getElementById('article-category').textContent = '错误';
        document.getElementById('article-date').textContent = '';
        document.getElementById('article-content').innerHTML = '<p>抱歉，找不到指定的文章。</p>';
        document.title = '文章未找到 - 大模型知识分享';
        return;
    }
    
    const article = articleData[articleId];
    
    // 更新页面标题和元信息
    document.title = `${article.title} - 大模型知识分享`;
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-category').textContent = article.category;
    document.getElementById('article-date').textContent = formatDate(article.date);
    
    // 显示加载状态
    const contentElement = document.getElementById('article-content');
    contentElement.innerHTML = '<p>正在加载文章内容...</p>';
    
    try {
        // 首先尝试加载Markdown文件
        if (article.markdownFile) {
            try {
                const markdown = await loadMarkdownFile(article.markdownFile);
                
                // 检查是否成功加载了有效内容
                if (markdown && !markdown.includes('文章加载失败')) {
                    // 渲染为HTML
                    let html = renderMarkdown(markdown);
                    
                    // 处理特殊内容框
                    html = processSpecialBoxes(html);
                    
                    // 更新内容
                    contentElement.innerHTML = html;
                    
                    // 重新高亮代码
                    if (typeof Prism !== 'undefined') {
                        Prism.highlightAllUnder(contentElement);
                    }
                    
                    return; // 成功加载Markdown，直接返回
                }
            } catch (markdownError) {
                console.log('Markdown加载失败，使用备用内容:', markdownError);
            }
        }
        
        // 如果Markdown加载失败，使用备用内容
        if (article.fallbackContent) {
            contentElement.innerHTML = article.fallbackContent;
            
            // 重新高亮代码
            if (typeof Prism !== 'undefined') {
                Prism.highlightAllUnder(contentElement);
            }
        } else {
            contentElement.innerHTML = '<p>文章内容暂时无法加载。</p>';
        }
        
    } catch (error) {
        console.error('加载文章失败:', error);
        contentElement.innerHTML = '<p>加载文章内容时出现错误，请稍后重试。</p>';
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadArticle();
    
    // 平滑滚动
    document.documentElement.style.scrollBehavior = 'smooth';
});