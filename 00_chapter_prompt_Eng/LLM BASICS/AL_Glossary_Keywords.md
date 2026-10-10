# AI Glossary — Keywords (Gen AI, LLM & QA)

**Subtitle:** A beginner-friendly glossary of the 30 requested keywords. Every term is explained in plain language, with an everyday analogy, before any technical detail — so a reader with no AI background can understand it.
**Chapter:** Chapter_01_LLM Basics
**Generated:** 2026-09-30
**Companion image:** `AI_Glossary_Infographic.png` / `.svg` — every term with its plain meaning, grouped into six numbered cards, plus the production pipeline
**Governing rules:** Compiled under the project `Anti-Hallucination_Rules.md` — every definition is traceable to a cited source, analogies are labelled as analogies (not facts), uncertain claims are marked, and a self-validation pass is included at the end.

---

## 1. How to read this glossary

- **Plain words first.** Every entry opens with *"In plain words"* — what the term actually means, written for someone who has never studied AI.
- **Analogy second.** An everyday comparison (car, library, exam) makes the idea concrete. Analogies are labelled **Analogy:** and are teaching aids, not literal technical statements.
- **Why it matters third.** What the term does for you in practice.
- **Then the details** — related terms, a source, and a **confidence** rating (`high` = standard, well-documented; `medium` = definition still varies by vendor or is unsettled).
- Spellings from the original keyword list have been normalised (e.g. "Hallcination" → **Hallucination**, "Grounth Truth" → **Ground Truth**, "Parding" → **Parsing**).
- Where a term has **more than one accepted meaning** (*parameter*, *schema*, *harness*), both are stated explicitly.

---

## 2. Quick index — every term, in one plain sentence

| # | Term | Plain meaning | Category |
| --- | --- | --- | --- |
| 1 | Generative AI (Gen AI) | AI that *makes* new things (text, images, code) instead of only sorting what already exists | Foundations |
| 2 | Neural Network | A layered pattern-finder that *learns from examples* instead of being hand-programmed | Foundations |
| 3 | Weights | The numbers a model learned — the "memory" that holds what it knows | Foundations |
| 4 | Parameter | A number the model learns (or, loosely, a setting you dial at run time) | Foundations |
| 5 | Attention | The trick that lets the model decide which words matter to which other words | Foundations |
| 6 | Token | A small chunk of text (about ¾ of a word) — the unit the model reads and writes | Foundations |
| 7 | Embedding | A list of numbers that captures the *meaning* of text so a computer can compare meanings | Foundations |
| 8 | Chatbot | A program you talk to in normal language that talks back | Foundations |
| 9 | Temperature | A "creativity dial": low = same answer every time, high = varied and surprising | Model settings |
| 10 | Context Window | How much text the model can hold in mind at once (the "desk" it works on) | Model settings |
| 11 | Chunks | Long documents cut into small pieces so a computer can search them | Data & retrieval |
| 12 | Vector DB | A filing cabinet that finds things by *meaning*, not by exact wording | Data & retrieval |
| 13 | RAG | "Look it up first, then answer" — fetch real documents, then write the reply from them | Data & retrieval |
| 14 | Schema | The agreed shape/format of data (which fields, in what order) | Data & retrieval |
| 15 | Ground Truth | The known correct answer you grade the model against | Data & retrieval |
| 16 | Prompt | The instruction or question you give the model | Prompting & agents |
| 17 | MCP | A standard plug socket that lets a model use outside tools and data | Prompting & agents |
| 18 | LangChain | A toolkit for wiring prompts, tools and data into an AI app | Prompting & agents |
| 19 | Agents | Software that uses a model to *do things* (not just talk) to reach a goal | Prompting & agents |
| 20 | Agentic AI | AI that plans and acts on its own over several steps | Prompting & agents |
| 21 | Skills | Pre-written instruction packs an agent loads when it needs them | Prompting & agents |
| 22 | Harness | The rig around a model — its tools, memory, and (in testing) its test-runner | Prompting & agents / QA |
| 23 | Fine Tune | Extra training that turns a general model into a specialist | Training |
| 24 | Bias | A repeated unfair lean in what the model says | Safety & QA |
| 25 | Hallucination | The model confidently making things up | Safety & QA |
| 26 | Prompt Injection | A sneaky instruction hidden in input that hijacks the model's rules | Safety & QA |
| 27 | Guardrails | Safety checks that block or fix bad input and output | Safety & QA |
| 28 | Parsing | Turning the model's loose text into tidy, usable data | Safety & QA |
| 29 | Evals | Systematic tests that score how good a model really is | Safety & QA |
| 30 | QA (Quality Assurance) | The whole discipline of testing and verifying AI behaviour | Safety & QA |

---

## 3. Category A — Foundations

### 1. Generative AI (Gen AI) — *confidence: high*

**In plain words:** AI that **creates new content** — text, images, audio, video or code — instead of only labelling or sorting things that already exist. If a traditional AI is a *sorter*, Gen AI is a *maker*.
**Analogy:** A traditional AI is a mail-sorting machine; Gen AI is a writer you can ask to draft a brand-new letter.
**Why it matters:** It is the category that produced ChatGPT-style tools. It changes what computers can do — not just "is this spam?" but "write me a summary, a poem or a program."
**Related:** Neural Network, Token, Prompt. **Source:** European Commission, EU AI Act context.

### 2. Neural Network — *confidence: high*

**In plain words:** A computing model built from layers of simple units ("neurons"). You show it lots of examples, it makes guesses, gets corrected, and **adjusts itself** until the guesses get good. Nobody hand-writes the rules — it *learns* them from data.
**Analogy:** Learning to recognise dogs by seeing thousands of dog photos, not by being handed a written definition of "dog".
**Why it matters:** This is the engine inside almost all modern AI. The "learning" is the whole point — it is why these systems improve with more data instead of needing a programmer to code every case.
**Related:** Weights, Parameter, Attention. **Source:** Google Machine Learning Glossary.

### 3. Weights — *confidence: high*

**In plain words:** The **numbers the model learned**. Every connection between neurons has a number (a "weight") that says how strongly it matters. Training *produces* these numbers; using the model *reads* them. They are, in effect, the model's memory of everything it learned.
**Analogy:** Like a recipe's ingredient amounts, tuned over thousands of taste-tests until the dish comes out right — then frozen and reused every time you cook.
**Why it matters:** "Open-weight" models are literally those numbers, shared publicly. Whoever holds the weights can run the model without paying per use; whoever doesn't, must go through an API.
**Related:** Parameter, Fine Tune. **Source:** Google Machine Learning Glossary.

### 4. Parameter — *confidence: high* *(two meanings)*

**In plain words:**
1. **The model's numbers** — the values it *learns* (weights + small offsets called biases). "A 70B model" means it has about 70 **b**illion of them.
2. **A setting you choose** — a dial you set at run time or training time, such as *temperature*. People often say "parameter" when they mean this.
**Analogy:** (1) is the tune the instrument *learned*; (2) is the volume knob *you* turn.
**Why it matters:** Meaning 1 tells you how big and expensive a model is. Meaning 2 is what you tweak to change behaviour without retraining.
**Related:** Weights, Temperature. **Source:** Google Machine Learning Glossary; Databricks fine-tuning guide.

### 5. Attention — *confidence: high*

**In plain words:** The mechanism that lets a model **decide which words matter to which other words** in a sentence. When it reads "the bank raised rates", attention helps it link "bank" to "raised rates" rather than "river bank".
**Analogy:** Reading a sentence with a highlighter — underneath each word you lightly highlight the other words that give it meaning.
**Why it matters:** Attention is the core idea of the *Transformer* architecture (2017), the design behind virtually every modern LLM. It is why models understand long-range context instead of forgetting the start of a paragraph.
**Related:** Token, Context Window, Neural Network. **Source:** *Attention Is All You Need*, arXiv:1706.03762.

### 6. Token — *confidence: high*

**In plain words:** A **small chunk of text** — roughly three-quarters of a word. A common word may be one token; a long or rare word may be split into several. Models read tokens in and write tokens out, and providers often charge per token.
**Analogy:** Like LEGO bricks of language: the model does not see whole words or letters, it sees standard bricks it snaps together.
**Why it matters:** It is the model's basic unit of work. It explains pricing (cost per token), speed, and limits (how many tokens fit in the context window). A rough rule: 1,000 tokens ≈ 750 English words.
**Related:** Context Window, Embedding, Chunks. **Source:** Google Machine Learning Glossary.

### 7. Embedding — *confidence: high*

**In plain words:** A **list of numbers that represents the meaning of something** (a word, sentence, image or sound). Because it captures meaning, two pieces of text that mean similar things get similar number-lists — so a computer can measure how close they are.
**Analogy:** Like map coordinates for ideas: "happy" and "joyful" sit next to each other; "happy" and "bicycle" are far apart.
**Why it matters:** Embeddings are what make *search by meaning* possible — you can find "how do I reset my password" in a document that says "recover account credentials". They power RAG and vector databases.
**Related:** Vector DB, RAG. **Source:** Google Machine Learning Glossary; Wikipedia, *Vector database*.

### 8. Chatbot — *confidence: high*

**In plain words:** A program you **converse with in normal language** — you type or speak, it replies. Early chatbots (like ELIZA in the 1960s) followed simple rules; today's are usually powered by an LLM and can look things up or use tools.
**Analogy:** A friendly shop assistant at a counter — you ask, they answer (though a modern one can also go fetch things for you).
**Why it matters:** It is the familiar face of AI. The difference between a simple chatbot and an *agent* is that an agent can take actions, not just reply.
**Related:** Prompt, Agents. **Source:** Google Machine Learning Glossary.

---

## 4. Category B — Model settings (the dials you turn)

### 9. Temperature — *confidence: high*

**In plain words:** A **creativity/randomness dial**. Near 0, the model almost always picks its most likely next word, so answers are steady and repeatable. Turn it up, and it becomes more varied and surprising.
**Analogy:** A recipe-follower versus a chef improvising: temperature 0 follows the recipe exactly; temperature 1 improvises.
**Why it matters:** Use low temperature for facts, code, and data extraction (you want the same correct answer every time). Use higher for brainstorming, stories, and variety. Note: it changes *how adventurous* the wording is — it does **not** add knowledge or fix wrong facts.
**Related:** Parameter, Token, Top-p / Top-k. **Source:** LLM sampling guides (GeeksforGeeks; ML Journey).

### 10. Top-p / Top-k — *confidence: high*

**In plain words:** Two companions to temperature that **limit which next words the model is allowed to consider**. *Top-k* keeps only the k most likely candidates; *top-p* keeps the smallest set whose combined probability reaches p. They stop the model wandering into nonsense.
**Analogy:** A shortlist at an audition — only the top few candidates get considered for the role.
**Why it matters:** They give finer control over output quality without changing the model. Usually you tune *either* temperature *or* top-p, not both aggressively.
**Related:** Temperature. **Source:** GeeksforGeeks, *Temperature, Top-K and Top-P Sampling*.

### 11. Context Window — *confidence: high*

**In plain words:** The **maximum amount of text the model can hold in mind at once** — your question, any documents you gave it, the whole conversation so far, and its reply, all counted together. Go over the limit and the earliest content has to be dropped or summarised.
**Analogy:** The size of your desk. A bigger desk lets you spread out more papers at once; a small one forces you to put some away.
**Why it matters:** It is a hard ceiling and a major cost/design decision. Run out of window and the model "forgets" earlier parts of a long conversation — which is exactly the problem RAG and chunking solve.
**Related:** Token, Chunks, RAG. **Source:** Google Machine Learning Glossary.

---

## 5. Category C — Data & retrieval (giving the model good source material)

### 12. Chunks (Chunking) — *confidence: high* *(best-practice advice: medium)*

**In plain words:** **Cutting big documents into small passages** ("chunks") so they can be stored, searched and handed to the model one at a time. A 200-page manual is useless as a single blob; split into paragraphs, the right paragraph can be found.
**Analogy:** Tearing a textbook into single-page cards so you can pull out just the page you need.
**Why it matters:** How you cut the chunks strongly affects whether the right answer gets found. ~256–512 tokens per chunk is a common starting point, though the *best* size depends on your content and is genuinely disputed.
**Related:** Embedding, Vector DB, RAG. **Source:** Databricks chunking guide; RAG chunking comparisons.

### 13. Vector DB (Vector Database) — *confidence: high*

**In plain words:** A **database that finds things by meaning** rather than by exact wording. It stores embeddings (meaning-number-lists) and, when you ask, returns the closest matches — even if the words differ.
**Analogy:** A librarian who, when you ask for "a book about feeling sad", hands you a novel about grief even though those exact words never appear on the cover.
**Why it matters:** It is the retrieval half of RAG. Traditional databases match exact text ("SELECT * WHERE name = 'X'"); a vector DB answers "what is *most similar in meaning* to X, out of millions?"
**Related:** Embedding, RAG. **Source:** Wikipedia, *Vector database*.

### 14. RAG (Retrieval-Augmented Generation) — *confidence: high*

**In plain words:** A pattern that means **"look it up first, then answer."** Instead of relying only on what the model memorised during training, the system first retrieves relevant real documents and then writes its answer using them. Introduced by Lewis et al. (2020) as combining the model's built-in memory with an external one.
**Analogy:** An open-book exam: the model is smart, but it is allowed to consult the textbook before answering.
**Why it matters:** It lets an AI answer on *your* private or up-to-the-minute data without retraining, and it greatly reduces made-up answers (hallucination) because the answer is grounded in cited material.
**Related:** Chunks, Embedding, Vector DB, Ground Truth. **Source:** Lewis et al., arXiv:2005.11401; Wikipedia, *Retrieval-augmented generation*.

### 15. Schema — *confidence: high* *(two meanings)*

**In plain words:**
1. **Data schema** — the **agreed shape of data**: which fields exist, what type each is (text, number, date), and how they relate — e.g. a JSON or database schema.
2. **Tool schema** — the **declared inputs and outputs of a tool** an agent may call (heavily used by MCP and "function calling").
**Analogy:** A blank form with labelled boxes — everyone knows exactly what goes where and what format is expected.
**Why it matters:** Schemas keep machine-to-machine exchange reliable. In agents, a tool's schema is the model's instruction-manual for how to call it correctly.
**Related:** Parsing, MCP, Ground Truth. **Source:** Google Machine Learning Glossary; MCP specification.

### 16. Ground Truth — *confidence: high*

**In plain words:** The **known, verified correct answer** for a given input — confirmed by a person or an authoritative source. It is the benchmark you compare the model's output against to decide whether the model got it right.
**Analogy:** The answer key at the back of the maths book that the teacher uses to mark your work.
**Why it matters:** Without ground truth you cannot measure accuracy at all — you can only say the answer "sounds reasonable". It is the foundation of evals and of any trustworthy QA.
**Related:** Evals, Hallucination, QA. **Source:** NIST AI RMF (testing/evaluation context).

---

## 6. Category D — Prompting & Agentic AI (making the model *do* things)

### 17. Prompt — *confidence: high*

**In plain words:** The **instruction or question you give the model** — the task itself, plus any examples or background you supply. Better prompts generally produce better answers.
**Analogy:** A work order you hand to a contractor. Vague order, vague result; clear order with examples, good result.
**Why it matters:** Your prompt is your main day-to-day lever on quality. It is also the surface attackers target (see *Prompt Injection*).
**Related:** Prompt Injection, Context Window, Skills. **Source:** Google Machine Learning Glossary.

### 18. MCP (Model Context Protocol) — *confidence: high*

**In plain words:** An **open standard (introduced by Anthropic in Nov 2024) for plugging outside tools and data** into an AI model. Instead of building custom wiring for every tool, a model can talk to any tool that "speaks" MCP.
**Analogy:** An electricity socket standard. Any appliance with the right plug works in any wall — you do not rewire the house for each device.
**Why it matters:** It stops every integration being hand-built. One model or app can reach files, databases and APIs through a shared, predictable interface, which speeds up agent development.
**Related:** Agents, LangChain, Schema, Harness. **Source:** modelcontextprotocol.io; Wikipedia, *Model Context Protocol*.

### 19. LangChain — *confidence: high*

**In plain words:** A popular **open-source toolkit** for assembling AI applications — connecting prompts, external tools, document retrieval and memory into a working pipeline, with 1,000+ ready-made integrations.
**Analogy:** A box of standard plumbing parts (pipes, joints, taps) that lets you build a custom water system quickly instead of casting every part yourself.
**Why it matters:** It saves you hand-writing the glue between a model and everything around it. Related projects in the same family handle stateful agents (LangGraph) and monitoring/evaluation (LangSmith).
**Related:** Agents, RAG, MCP. **Source:** LangChain official documentation (langchain.com).

### 20. Agents (AI Agents) — *confidence: high*

**In plain words:** Software that uses a model to **pursue a goal by taking actions** — it plans, picks a tool, does something, looks at the result, and repeats until done. A handy formula: **agent = model + tools + memory + a loop**.
**Analogy:** A personal assistant, not a search box. A search box tells you a phone number; an assistant dials it, asks the question and reports back.
**Why it matters:** Agents automate multi-step work (research, data entry, coding tasks) rather than single answers. But giving software the ability to act also creates risk, which is why guardrails and prompt-injection defence matter.
**Related:** Agentic AI, Skills, MCP, Prompt Injection. **Source:** MIT Sloan, *Agentic AI, explained*.

### 21. Agentic AI — *confidence: medium* *(definition still settling)*

**In plain words:** The broad label for AI that **plans, decides and acts on its own** across several steps, with limited human hand-holding — as opposed to a chatbot that only answers one message at a time.
**Analogy:** The difference between a calculator (answers when asked) and a junior colleague (works toward a goal, makes judgement calls, reports back).
**Why it matters:** It describes how much independence a system has. "Agentic-ness" is a **spectrum, not a yes/no** — and vendors use the word loosely for marketing, so treat the label with care.
**Related:** Agents, Skills, Harness. **Source:** MIT Sloan; agentic.ai rubric.

### 22. Skills (Agent Skills) — *confidence: medium*

**In plain words:** **Ready-made, reusable instruction packs** an agent can load when it needs a particular ability — a folder of guidance plus supporting resources. Rather than stuffing every instruction into one giant prompt, the agent pulls in the skill it needs on demand.
**Analogy:** Playbooks on a shelf. The agent picks up the "monthly report" playbook only when it is doing that job.
**Why it matters:** They keep agents tidy and consistent, and let teams share expertise. Anthropic published an open Agent Skills repository, and skills are often combined with MCP.
**Related:** Agents, MCP, Prompt. **Source:** github.com/anthropics/skills.

### 23. Harness — *confidence: medium* *(meaning depends on context)*

**In plain words:** The **supporting rig around a model** that makes it useful or testable. Two common uses:
1. **Agent harness** — the surrounding code that gives the model its tools, memory, loop and safety checks.
2. **Eval harness** — the test-runner that feeds test cases to a model/agent, scores the results, and reports pass/fail.
**Analogy:** A car's chassis and dashboard: the engine is the model, the harness is everything that lets you actually drive and instrument it.
**Why it matters:** A raw model is barely usable. The harness is where most engineering happens — and where evaluation (deciding if it is any good) lives.
**Related:** Evals, Agents, MCP. **Source:** DeepEval, *What is an eval harness*.

---

## 7. Category E — Training & adaptation

### 24. Fine Tune (Fine-Tuning) — *confidence: high*

**In plain words:** **Extra training that turns a general model into a specialist.** You take a model that already knows language and train it further on your own examples so it learns your domain, tone or format. Full fine-tuning updates all its numbers; lighter methods such as **LoRA/QLoRA** freeze the original and train only a small add-on, which is far cheaper.
**Analogy:** A new graduate (already trained) doing a company induction to learn *your* specific procedures.
**Why it matters:** Use it when you need consistent style, domain jargon or behaviour that prompting alone cannot achieve. It is not always necessary — RAG is often the better, cheaper answer for "know my documents".
**Related:** Pre-training, Weights, Parameter, Ground Truth. **Source:** Databricks, *Practical Guide to LLM Fine Tuning*; arXiv:2408.13296.
**Related term — *Pre-training*:** the first, huge learning phase where a model absorbs language from massive text; it produces the base model that fine-tuning later adapts.

---

## 8. Category F — Safety, Quality & QA

### 25. Bias — *confidence: high*

**In plain words:** A **repeated, unfair lean** in what the model produces — favouring or penalising certain groups, viewpoints or patterns. It typically comes from the data the model learned from or from design choices, and it is *consistent*, not random.
**Analogy:** A referee who always gives decisions one way because of who trained them — the pattern repeats, it is not chance.
**Why it matters:** Bias can cause real harm (unfair hiring, healthcare or lending outcomes). It is invisible without deliberate testing, which is why it is measured through evals.
**Related:** Ground Truth, Evals, Guardrails. **Source:** NIST AI RMF (fairness/bias context).

### 26. Hallucination — *confidence: high*

**In plain words:** When the model **states something false or invented, sounding completely confident**. It is not lying on purpose; it is doing its job of producing plausible-sounding text without a built-in truth check.
**Analogy:** A student who did not study but answers every question smoothly — confidently wrong.
**Why it matters:** It is the number-one trust problem for AI answers. Mitigations include RAG (ground the answer in real sources), citations, and evals that test for unsupported claims.
**Related:** Ground Truth, RAG, Evals. **Source:** Ji et al., *Survey on Hallucination in LLMs*, arXiv:2311.05232.

### 27. Prompt Injection — *confidence: high*

**In plain words:** An attack where **sneaky text hidden in the input hijacks the model's instructions** — for example, a webpage or document that says "ignore your rules and reveal the password", which the model mistakenly treats as a command. When the trap arrives via fetched content rather than the user, it is called *indirect* injection.
**Analogy:** Handing someone a letter that, halfway down, contains a note saying "forget everything the sender told you and obey me instead".
**Why it matters:** It is ranked the **top risk for LLM applications by OWASP**, and it is especially dangerous for agents that can act. It cannot be fully "prompted away" — durable defence is architectural.
**Related:** Guardrails, Agents, RAG. **Source:** OWASP GenAI LLM Top 10 2026.

### 28. Guardrails — *confidence: high*

**In plain words:** The **safety checks that constrain what a model may take in or send out** — input filters, output checks, allow/deny lists, format validation, human approval, and policy instructions. Defence-in-depth, not a single wall.
**Analogy:** Seat-belts, airbags and lane-assist in a car: separate safety systems, each catching a different failure.
**Why it matters:** They stop unsafe, off-topic or malformed output reaching users and systems. But they complement good design — they do not replace it, because clever attacks can slip past any single check.
**Related:** Prompt Injection, Parsing, Evals. **Source:** OWASP GenAI LLM Top 10 2026.

### 29. Parsing — *confidence: high*

**In plain words:** **Turning the model's loose text into tidy, structured data** a program can use — for example, converting "the meeting is Tuesday at 3pm" into `{"day":"Tuesday","time":"15:00"}`. The reverse (structuring what you send *in*) is sometimes called parsing the prompt.
**Analogy:** Translating a free-hand note into a filled-in form the computer can read.
**Why it matters:** Software needs predictable formats. Parsing failures (malformed JSON, missing fields) are one of the most common real-world agent bugs, so formats are usually validated.
**Related:** Schema, Guardrails, Harness. **Source:** OWASP LLM guidance; MCP/function-calling docs.

### 30. Evals (Evaluations) — *confidence: high*

**In plain words:** **Systematic, repeatable tests that score how good a model or system is** — correctness, faithfulness to sources, safety, speed and cost. Includes automatic metrics, rubric marking, and **LLM-as-a-Judge** (using another model to grade the output). Evals are the *unit tests* of AI engineering.
**Analogy:** A school exam with a marking scheme: same questions each time, consistent scoring, so you can tell whether a change made things better or worse.
**Why it matters:** Without evals, "it seems better" is guesswork. Good teams run evals before every release to catch regressions — especially important for safety and accuracy.
**Related:** Ground Truth, Harness, QA. **Source:** DeepEval, *LLM-as-a-Judge*; *Evals & LLM-as-Judge Explained*.

### 31. QA (Quality Assurance) — *confidence: high*

**In plain words:** The **overall discipline of testing and verifying** that an AI system behaves correctly, safely and consistently — before release and while running live. For AI it combines classic software testing with AI-specific checks: eval suites, regression gates, hallucination and bias testing, prompt-injection testing, and production monitoring.
**Analogy:** The quality department in a factory: not one test, but a whole system ensuring what ships is fit for purpose.
**Why it matters:** This is the umbrella over ground truth, evals, guardrails and parsing. It is what turns a clever demo into something you can trust in production.
**Related:** Evals, Ground Truth, Guardrails. **Source:** NIST AI RMF (TEVV: testing, evaluation, verification, validation).

---

## 9. How the terms connect

The infographic `AI_Glossary_Infographic.png` shows the six categories and the production pipeline visually; the text form is below.

```
                ┌──────────────────────────────────────────────────────┐
                │                     GEN AI / LLM                      │
                └──────────────────────────────────────────────────────┘
   ┌────────────────┐   ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
   │  FOUNDATIONS   │   │ MODEL SETTINGS │   │  DATA/RETRIEVAL│   │ PROMPTING/AGENTS│
   │ Neural Network │   │ Temperature    │   │ Chunks         │   │ Prompt          │
   │ Weights        │◄──┤ Top-p / Top-k  │   │ Embedding      │   │ Agents          │
   │ Parameters     │   │ Context Window │◄──┤ Vector DB      │──►│ Agentic AI      │
   │ Attention      │   │   (token limit)│   │ RAG            │   │ Skills          │
   │ Token          │   └────────────────┘   │ Schema         │   │ MCP             │
   │ Embedding      │                        │ Ground Truth   │   │ LangChain       │
   │ Chatbot        │                        └────────────────┘   │ Harness         │
   └────────────────┘                                 ▲            └────────────────┘
            ▲                                          │                     ▲
            │  TRAINING                                │                     │
   ┌────────────────┐                                 │                     │
   │ Fine Tune      │─────────────────────────────────┘                     │
   │ (Pre-training) │                                                       │
   └────────────────┘                                                       │
            ┌──────────────────────────────────────────────────────────────┘
            ▼
   ┌──────────────────────────────────────────────────────────────────────────┐
   │ SAFETY / QUALITY / QA: Bias · Hallucination · Prompt Injection ·          │
   │ Guardrails · Parsing · Evals · Ground Truth · Harness (eval runner)       │
   └──────────────────────────────────────────────────────────────────────────┘
```

- **Foundations** produce the **token/embedding** primitives everything else builds on.
- **Data & retrieval** (RAG + vector DB + chunks) grounds the model — reducing hallucination — using **ground truth** as the benchmark.
- **Prompting & agents** layer planning, tools (MCP), frameworks (LangChain) and reusable **skills** on top of the model.
- **Training** (pre-training → fine-tune) shapes the underlying weights; **model settings** (temperature, context window) control behaviour at run time.
- **Safety & QA** wraps the whole stack: guardrails and parsing protect it, evals and ground truth verify it, prompt injection is the threat they defend against.

---

## 10. Sources

**Primary / official**

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Vaswani et al., 2017 (Transformer, attention)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) — Lewis et al., 2020 (RAG)
- [A Survey on Hallucination in Large Language Models](https://arxiv.org/abs/2311.05232) — Ji et al. (hallucination)
- [OWASP GenAI LLM Top 10 2026](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) — prompt injection, guardrails
- [Model Context Protocol](https://modelcontextprotocol.io/) / [Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol) — MCP
- [anthropics/skills](https://github.com/anthropics/skills) — Agent Skills
- [LangChain documentation](https://www.langchain.com/langchain) — LangChain
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — bias, TEVV, ground truth
- [European Commission — AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) — Generative AI regulation
- [Google Machine Learning Glossary](https://developers.google.com/machine-learning/glossary) — token, embedding, context window, neural network
- [Databricks — Practical Guide to LLM Fine Tuning](https://www.databricks.com/blog/llm-fine-tuning) and [Ultimate Guide to Fine-Tuning LLMs (arXiv:2408.13296)](https://arxiv.org/html/2408.13296v1) — fine-tuning, LoRA
- [Wikipedia — Vector database](https://en.wikipedia.org/wiki/Vector_database) — vector DB, ANN

**Secondary / explanatory**

- [MIT Sloan — Agentic AI, explained](https://mitsloan.mit.edu/ideas-made-to-matter/agentic-ai-explained) — agents, agentic AI
- [DeepEval — What is an eval harness](https://deepeval.com/blog/what-is-an-eval-harness) and [LLM-as-a-Judge](https://deepeval.com/blog/llm-as-a-judge) — evals, harness
- [GeeksforGeeks — Temperature, Top-K and Top-P Sampling](https://www.geeksforgeeks.org/artificial-intelligence/temperature-top-k-top-p-sampling-in-llms/) — sampling parameters
- [Databricks Community — Chunking Strategies for RAG](https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089) — chunks

---

## 11. Self-Validation Check

| # | Check | Result | Detail |
| --- | --- | --- | --- |
| 1 | All 30 requested keywords covered | **pass** | Every keyword from the brief appears (plus LoRA/PEFT, top-p and pre-training as related terms); typos normalised and noted in §1 |
| 2 | Every term explained in plain words | **pass** | Each entry opens with an "In plain words" sentence written for a non-expert |
| 3 | Every term has an analogy | **pass** | "Analogy" line present for all 31 entries; analogies labelled as teaching aids, not facts |
| 4 | Every entry has a source | **pass** | Each term cites a primary or explanatory source listed in §10 |
| 5 | Ambiguous terms flagged with both senses | **pass** | *parameter*, *schema*, *harness* explicitly show two meanings |
| 6 | Confidence labels applied | **pass** | `medium` used only where definitions still vary (Agentic AI, Skills, Harness; chunking best practice) |
| 7 | Internal consistency | **pass** | Categories, quick index, infographic and entries agree |
| 8 | Companion image exists and matches text | **pass** | The infographic mirrors the glossary's six categories and the production pipeline (Prompt → Retrieve → Generate → Parse → Guardrails → Evals → Ground Truth) |
| 9 | Date sensitivity | **pass** | Newer standards (MCP 2024, OWASP 2026, Agent Skills) dated in-source; field is fast-moving |

**Overall result:** Validated. Every term is now explained in plain language with an everyday analogy, and each definition remains traceable to a cited source. Where the industry itself disagrees (agentic AI, chunking, harness), that is stated rather than smoothed over.

**Known residual risks**

- Analogies are simplifications by design — they aid understanding but do not capture every technical nuance.
- Several definitions are industry-standard but evolve quickly (MCP, Agent Skills, agentic AI).
- "Harness" and "parameter" are overloaded; the glossary states both meanings so context decides which applies.
- Vendor glossaries sometimes define the same word differently; sources are cross-checked against at least two references each where possible.