# Open Source vs Closed Source AI Models — Guide

**Subtitle:** What open source and closed source models are, an inventory of the open-weight and closed models available in 2026, and a head-to-head comparison
**Chapter:** Chapter_01_LLM Basics
**Generated:** 2026-09-30
**Companion image:** `Open_vs_Closed_Models_Infographic.png` / `.svg`
**Governing rules:** Compiled under the project `Anti-Hallucination_Rules.md` — verified facts carry a source and confidence, inferences are labelled, and a self-validation pass is included at the end.

> **Point-in-time warning:** the model landscape changes weekly. Everything here is a snapshot as of **30 September 2026**; treat model names, versions and licences as perishable.

---

## 1. Executive summary

- The distinction that actually matters is **open source vs open weight**. Under the OSI's Open Source AI Definition (OSAID 1.0), a model is genuinely *open source* only if it grants four freedoms — **use, study, modify, share** — and provides the "preferred form to make modifications" (data information, code, **and parameters/weights**). Under that bar, **almost every "open" model is really open-weight under a restrictive licence**, not open source.
- **Open weight** means the weights are downloadable, *regardless of licence* — including licences that cap commercial use, restrict fields of use, or set user thresholds. This is the category most people mean when they say "open source model".
- **Closed source** means weights are not available at all: you reach the model only through an API or hosted product, and the provider controls access, pricing and terms.
- On **capability**, the camps are closer than the headlines suggest: as of March 2026 the top closed model led the top open model by **3.3%** (Stanford HAI), and Epoch AI measured an average **~4-month / 8-ECI-point lag** for the best open-weight models.
- On **commercial reality**, closed models dominate enterprise spend: open-source share of enterprise LLM API usage **fell from 19% to 11%** in a year, while Anthropic + OpenAI + Google took **88%**.
- **Chinese labs are the centre of gravity** for permissively licensed frontier open weights (commonly Apache 2.0 / MIT), led by DeepSeek, Alibaba's Qwen, Moonshot's Kimi and Z.ai's GLM.

---

## 2. What "open source" means

### 2.1 The OSAID 1.0 four freedoms — *confidence: high*

An AI system is open source when it is made available under terms granting:

1. **Use** — for any purpose, without permission.
2. **Study** — how it works and inspect its components.
3. **Modify** — for any purpose, including changing its output.
4. **Share** — with or without modifications, for any purpose.

A precondition is access to the **"preferred form to make modifications"**, which must include:

- **Data Information** — enough detail about training data that a skilled person could build a substantially equivalent system (provenance, scope, selection, labelling/filtering, and listings of public and third-party data).
- **Code** — the complete source used to train and run the system (processing/filtering, training with settings, validation, tokenizers, inference, architecture).
- **Parameters** — the model parameters such as **weights**, under OSI-approved terms.

*Source: Open Source Initiative — The Open Source AI Definition 1.0; OSAID 1.0 was published 28 October 2024.*

### 2.2 Open weight is not open source — *confidence: high*

A model can publish **downloadable weights** and still fail OSAID: if it caps commercial use, restricts fields of use, or requires a separate licence above a user threshold, it is **not open source**. The OSI says exactly this about Meta's LLaMA licence, which restricts commercial use for some users and restricts fields of use — contrary to Open Source Definition points 5 and 6.

**Practical rule of thumb:** "open weights" = you can download and run it; "open source" = you can also legally use, study, modify and share it freely. Most marketed "open-source LLMs" are the former.

### 2.3 The accessibility spectrum (Epoch AI taxonomy) — *confidence: high*

Six ordered categories, most to least permissive:

1. Open weights (**unrestricted**) — permissive licence (e.g. Apache 2.0 / MIT)
2. Open weights (**restricted use**) — user thresholds, use restrictions
3. Open weights (**non-commercial**)
4. **API access** — weights not available
5. Hosted access only, no API
6. **Unreleased**

---

## 3. What "closed source" means

**Confidence: high.**

A closed (proprietary) model is one whose **weights are not published**. You can only query it through a provider's API or hosted product. Consequences:

- **No download, no self-hosting** — you cannot inspect, fine-tune locally, redistribute, or run it offline.
- **Provider controls** access, pricing, rate limits, availability and terms — and can **change or revoke** them.
- **Transparency is minimal** — usually no weights, no training code and no training data.
- **Managed safety** — the provider can monitor, patch and revoke usage; but you inherit its policies and outages.
- Access is typically billed **per token**, scaling linearly with use.

*Example of the model:* OpenAI's GPT-2 (2019) had open weights and code after a delay, but from **GPT-3 onwards OpenAI has not released weights, training code or data** for its flagship models.

---

## 4. Definitions at a glance

| Term | Weights downloadable? | Licence freedom | Typical access | Example |
| --- | --- | --- | --- | --- |
| **Open source (OSAID)** | Yes, plus data info + code | Full four freedoms | Self-host | Rare; most "open" models fall short |
| **Open weight (unrestricted)** | Yes | Permissive (Apache 2.0 / MIT) | Self-host / API | DeepSeek-R1, Qwen3, gpt-oss-120b |
| **Open weight (restricted / non-commercial)** | Yes | Capped or field-restricted | Self-host under terms | Llama 4 (community licence), Mistral Large 2 |
| **Closed / proprietary** | No | Commercial service terms | API / hosted only | GPT-5.x, Claude, Gemini (flagship) |

---

## 5. Licensing landscape

| Licence | Commercial use | Key caveats | Typical models |
| --- | --- | --- | --- |
| **Apache 2.0** | Yes | Permissive; no field-of-use limits | Qwen, Gemma 4 (reported), gpt-oss, OLMo, Granite |
| **MIT** | Yes | Permissive, minimal conditions | DeepSeek, GLM, Phi |
| **Llama Community Licence** | Mostly | Entities over **700M monthly active users** must request a licence from Meta at its sole discretion; must display "Built with Llama" and prefix derivative names with "Llama"; Acceptable Use Policy applies | Meta Llama 4 |
| **Gemma Terms / conditional terms** | Varies | Older Gemma releases used Google's Gemma Terms + usage policy; **Gemma 4 is reported as Apache 2.0** (see the conflict flagged in §12) | Gemma 1–3 vs Gemma 4 |
| **Qwen / Kimi conditional licences** | Mostly | Some very large checkpoints add conditions for large model-as-a-service or commercial products (e.g. Qwen3.8-Max; Kimi K3 for large MaaS) | Qwen3.8-Max, Kimi K3 |
| **CC-BY-NC 4.0** | **No** | Non-commercial only | Cohere Command R weights |
| **Mistral Research / non-commercial** | **No** | Research or non-commercial terms | Mistral Large 2 |

*Sources: OSI (Llama licence ruling), Meta Llama 4 Community Licence, AWS/UXL licence trackers, plus per-vendor docs.*

---

## 6. Available OPEN-WEIGHT models (2026)

**Legend:** `conf` = confidence. `high` = vendor licence/spec confirmed; `medium` = reported by a reliable secondary source; `low` = single secondary source.

### 6.1 United States

| Lab | Model family | Sizes / notes | Context | Licence | conf |
| --- | --- | --- | --- | --- | --- |
| Meta | **Llama 4** | Scout / Maverick MoE | Large | Llama Community (restricted) | high |
| Meta | **Llama 5** | Shipped 8 Apr 2026 as open weights, alongside closed Muse Spark | — | (community terms) | low |
| Google DeepMind | **Gemma 4** | E2B, E4B, 12B unified, 26B MoE, 31B dense; native multimodal | 256K | Apache 2.0 (reported) | medium |
| OpenAI | **gpt-oss-120b / 20b** | First OpenAI open-weight models (from Aug 2025); strong reasoning, tool use | 256K | Apache 2.0 | high |
| Microsoft | **Phi-4** | Small, high-quality SLMs | — | MIT | high |
| NVIDIA | **Nemotron** | Open-weight family for enterprise | — | NVIDIA open licence | medium |
| IBM | **Granite** | Enterprise-oriented, small/mid | — | Apache 2.0 | medium |
| AI2 | **OLMo** | Fully open (data + code + weights) | — | Apache 2.0 | high |
| Databricks | **DBRX** | Open MoE | — | Databricks Open Model Licence | medium |
| Cohere | **Command R / R+** | Open weights, non-commercial | — | CC-BY-NC 4.0 | high |
| Snowflake | **Arctic** | Enterprise LLM | — | Apache 2.0 | medium |
| xAI | **Grok-1** | 2024 open-weight release (later Grok models are closed) | — | Apache 2.0 | medium |

### 6.2 China (the centre of permissive open-weight frontier releases)

| Lab | Model family | Sizes / notes | Licence | conf |
| --- | --- | --- | --- | --- |
| DeepSeek | **R1, V3.2, V4 / V4 Pro / V4-Flash** | R1 showed reasoning via pure RL; V4 checkpoints (0731/0813) | MIT | high |
| Alibaba | **Qwen 2.5 → 3 → 3.5 → 3.6 → 3.8** | Huge derivative ecosystem; 27B multimodal Apache 2.0; 2.4T sparse model under conditional Qwen3.8-Max Licence | Apache 2.0 (mostly) | high |
| Moonshot | **Kimi K2.6, K3** | K3 (17 Jul 2026) ~2.8T params — billed as the largest open-source model; conditional licence for large MaaS | MIT-style / conditional | medium |
| Z.ai (Zhipu) | **GLM-4.6, GLM-5, GLM-5.1/5.2/5.3** | GLM-5.3 reportedly top open-weight entry on the Artificial Analysis Intelligence Index (45) | MIT | medium |
| MiniMax | **MiniMax series** | Open-weight text/multimodal | varies | medium |
| ByteDance | **Doubao** | Partly open weights | varies | low |
| Tencent | **Hunyuan** | Open-weight large models | Tencent licence | medium |
| 01.AI | **Yi** | Open-weight family | Apache 2.0 | medium |
| Xiaomi | **MiMo** | Open-weight, 2026 | varies | low |

### 6.3 Europe / other

| Lab | Model family | Notes | Licence | conf |
| --- | --- | --- | --- | --- |
| Mistral AI | **Mistral 7B, Mixtral, Mistral Large 2** | 7B/Mixtral permissive; Large 2 non-commercial | Apache 2.0 / non-commercial | high |
| TII (UAE) | **Falcon** | Open-weight family | Apache 2.0 | medium |

### 6.4 What Epoch AI classifies specifically — *confidence: high*

- **Open weights (unrestricted):** DeepSeek-R1, DeepSeek-V3.2, Qwen3-235B-A22B, GLM-5, Kimi K2.6, gpt-oss-120b.
- **Open weights (restricted use):** Llama 4, Gemma 4.
- **Open weights (non-commercial):** Mistral Large 2.

---

## 7. Available CLOSED models (2026)

| Lab | Flagship (2026) | Access | Notable traits | conf |
| --- | --- | --- | --- | --- |
| OpenAI | **GPT-5.x / GPT-6 "Astra"** | API / ChatGPT | Reported top proprietary model (BenchLM, 29 Sep 2026, score 88.2) | medium |
| Anthropic | **Claude Opus 4.6 / Claude "Fable" 5.x** | API / Claude | Strong coding + safety focus; near top of leaderboards | medium |
| Google | **Gemini 3 / 3.1 Pro** | API / Gemini apps | Flagship closed; **Gemma** is the open counterpart | medium |
| xAI | **Grok 4 / 4.6 / 4.7 / 4.20** | API / X | Closed API (Grok-1 was an exception) | medium |
| Meta | **Muse Spark** | Meta apps / API | First fully **closed** Meta model (8 Apr 2026), a strategic reversal from Llama | medium |
| Cohere | **Command (hosted)** | API | Enterprise RAG focus | medium |
| AI21 | **Jamba** | API | Hybrid SSM/Transformer | medium |
| Amazon | **Nova** | AWS Bedrock | Deep AWS integration | medium |
| Apple | **Apple Intelligence foundation models** | On-device / Private Cloud | Mostly closed, device-tied | low |
| Microsoft | **Copilot models** | Product | Built on OpenAI models | medium |

**Capability context — *confidence: high*:** as of March 2026 the top closed model led the top open model by **3.3%**, and **six of the top ten** Arena models were closed; closed models are **100% of the top-1** models since 2018. Concrete ECI point: Kimi K2.6 (open, 20 Apr 2026) scored 151.60 vs GPT-5.5 Pro (closed, 23 Apr 2026) at 159.35.

---

## 8. Capability snapshot

| Measure | Value | Source |
| --- | --- | --- |
| Top closed vs top open gap | 3.3% (Mar 2026), up from 0.5% (Aug 2024) | Stanford HAI, AI Index 2026 |
| Open-weight lag | ~4 months / ~8 ECI points (since Jan 2026) | Epoch AI |
| Alt. lag estimate | 5–22 months on benchmarks; ~15 months compute (different method) | Epoch AI open-models report |
| Arena Elo (Mar 2026) | Anthropic 1,503 · xAI 1,495 · Google 1,494 · OpenAI 1,481 · Alibaba 1,449 · DeepSeek 1,424 | Stanford HAI |
| Benchmark reliability | Invalid-question rates 2% (MMLU Math) to 42% (GSM8K) | Stanford HAI |
| Enterprise API share (2025) | Anthropic 40% · OpenAI 27% · Google 21% (**88%**); open-source 11% (down from 19%) | Menlo Ventures |
| Open ecosystem scale | 2.96M public repos; Qwen has **151,448** derivatives | Hugging Face |

---

## 9. Head-to-head comparison

| Dimension | Open source / open weight | Closed source |
| --- | --- | --- |
| Access to weights | Downloadable; can run, fine-tune, redistribute (per licence) | Not available; API or hosted product only |
| Licence freedom | Apache 2.0 / MIT at best; restricted community / non-commercial common | Commercial services agreement; no redistribution |
| Capability at the frontier | Competitive but behind (3.3% gap; ~4-month lag) | Leads the frontier; 6 of top 10 closed; 100% of top-1 since 2018 |
| Transparency | Better, but full reproducibility rare — training data usually undisclosed | None; no weights, data or training code |
| Cost structure | No per-token fee; cost moves to GPUs/ops (self-host) | Pay-per-token; scales linearly with usage |
| Control & privacy | Self-host keeps data in-house; no revocation risk | Provider controls access, pricing, terms; revocation risk |
| Safety & misuse | Irrevocable release; safeguards removable by fine-tuning | Provider can monitor, patch, revoke |
| Regulation (EU AI Act) | Article 53(2) waives two documentation obligations for genuinely free & open-source GPAI | Full GPAI obligations apply |
| Ecosystem | Very large derivative/tooling ecosystem (Qwen, GGUF/llama.cpp, quantization) | Not comparable; no public derivative ecosystem |
| Best for | High-volume, privacy-sensitive, customisable, cost-controlled workloads | Frontier quality, quickest start, managed safety, no infra burden |

---

## 10. Economics

**Confidence: high for the growth trend, low for the break-even figure.**

- Training cost for top models has grown **2–3× annually for eight years**; the largest models could exceed **$1 billion** by 2027 *(modelled estimates, not audited)*.
- Frontier open-weight releases do **not** look like a licensing-revenue business — weights are given away on the most permissive terms, so returns must come from API/cloud, hardware, or ecosystem position.
- Self-hosting break-even is often quoted at **~5–10M tokens/day** versus a premium API tier — but that claim comes from a single secondary source with **no published methodology** (another quotes ~2B tokens/month, not obviously equivalent). Treat as **low confidence**.
- Outside the enterprise, adoption of open models via vLLM and OpenRouter is rising for Qwen, DeepSeek, Kimi, MiniMax and GLM.

---

## 11. How to choose

1. **Pick open weight if** you need data to stay on-premises, want to avoid per-token fees at high volume, need to fine-tune deeply, want no revocation/lock-in risk, or are price-sensitive at scale.
2. **Pick closed if** you need the strongest capability now, the fastest path to production, managed safety and compliance, multimodality and tooling out of the box, and you do not want infrastructure ownership.
3. **Consider routing** — send high-volume, low-risk traffic to cheap open-weight models and reserve closed frontier models for the hardest queries. Three 2026 secondary sources describe this as emerging; **no primary deployment data confirming its prevalence was verified** here (see §12).
4. **Check the licence before you build.** "Open" may still mean non-commercial (Cohere Command R), a 700M-MAU cap (Llama 4), or extra conditions at large scale (Qwen3.8-Max, Kimi K3).

---

## 12. Missing / Unknown Information

Declared rather than guessed, per Anti-Hallucination Rule 3.

1. **Licence conflict for Gemma 4** — Epoch AI classifies Gemma 4 as "restricted use", while 2026 secondary sources report it under **Apache 2.0**. The vendor page was not fetched directly; unresolved.
2. **Model-version churn** — many 2026 names (GPT-6 "Astra", Claude "Fable" 5.x, Muse Spark, Llama 5, Kimi K3, Qwen 3.8) come from **secondary sources only**; exact specs, param counts and licences were not confirmed first-party.
3. **No single authoritative registry** of "all" open and closed models exists; the inventory above is representative, not exhaustive.
4. **Closed-model commercial terms** (OpenAI Services Agreement, Anthropic commercial terms) were **not read directly**.
5. **EU AI Act Article 53(2)** wording relies on **secondary legal guides**; the primary regulation text was not fetched.
6. **Self-host break-even** figures appear only in secondary sources with no published methodology and disagree in units.
7. **Training costs** are modelled estimates, not audited disclosures.
8. **Hugging Face metrics** are explicitly **not** measures of quality, commercial adoption or market share, and miss API/private usage.
9. **No data collected** on non-English model ecosystems or countries beyond the US and China.

---

## 13. Inferences (low confidence)

Labelled explicitly, per Anti-Hallucination Rule 5.

| Inference | Basis | Label |
| --- | --- | --- |
| Meta's move from open-weight Llama to closed Muse Spark reflects a strategic bet that frontier capability monetises better than ecosystem goodwill. | News reporting on the Apr 2026 pivot. | **Inference (low confidence)** |
| The fall in enterprise open-source share despite rising open-weight quality is explained by risk aversion, procurement inertia and vendor-support expectations rather than capability. | Menlo reports both the quality context and enterprise caution. | **Inference (low confidence)** |
| Routing between open-weight and closed models will become a default architecture in 2026–27. | Three secondary sources describe it; no primary deployment data. | **Inference (low confidence)** |
| Chinese labs' permissive licensing serves ecosystem/platform positioning more than licence revenue. | Hugging Face draws this from licence data; no company financials verified. | **Inference (low confidence)** |

---

## 14. Self-Validation Check

| # | Check | Result | Detail |
| --- | --- | --- | --- |
| 1 | Covers all four required questions | **pass** | §2 open source, §3 closed source, §6–§7 inventories, §9 comparison |
| 2 | Every verified fact carries a source | **pass** | Facts drawn from the project's cited research (F01–F38) plus new sourced rows |
| 3 | Model rows carry a licence + confidence | **pass** | Every inventory row has a licence and a confidence label |
| 4 | Secondary-only claims flagged | **pass** | `medium`/`low` rows and §12 items 1–2 |
| 5 | Inferences labelled | **pass** | §13 labelled per Rule 5 |
| 6 | Missing information declared | **pass** | §12 lists nine items |
| 7 | Companion image matches text | **pass** | Infographic mirrors §2–§9 |
| 8 | Date sensitivity | **pass** | Snapshot date stated; field flagged as fast-moving |
| 9 | Potential bias disclosed | **pass** | Vendor/self-reported sources flagged where used |

**Overall result:** Validated. Definitions and the comparison rest on cited sources; the model inventory is representative and confidence-labelled; where sources disagree (Gemma 4 licence) the conflict is stated rather than smoothed over.

**Known residual risks**

- Rapid model churn: several 2026 names and specs may already be superseded.
- Secondary-source dependence for the newest closed and open releases.
- Licence terms can change; verify first-party before commercial use.

---

## 15. Sources

**Tier 1 — Primary**

- [The Open Source AI Definition – 1.0](https://opensource.org/ai/open-source-ai-definition) — Open Source Initiative
- [Meta's LLaMa license is not Open Source](https://opensource.org/blog/metas-llama-2-license-is-not-open-source) — Open Source Initiative
- [Llama 4 Community License Agreement](https://dev.meta.ai/llama/llama4/license) — Meta
- [Introducing gpt-oss](https://openai.com/index/introducing-gpt-oss/) and [gpt-oss Model Card](https://openai.com/index/gpt-oss-model-card/) — OpenAI
- [Gemma 4](https://deepmind.google/models/gemma/gemma-4/) — Google DeepMind
- [State of Open Models: Summer 2026](https://huggingface.co/blog/state-of-open-models-summer-2026) — Hugging Face
- [DeepSeek-R1](https://arxiv.org/abs/2501.12948) — DeepSeek-AI / arXiv
- [Guidelines for providers of general-purpose AI models](https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers) — European Commission

**Tier 2 — Analyst**

- [Technical Performance — The 2026 AI Index Report](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance) — Stanford HAI
- [Open models lag state-of-the-art closed models by 4 months](https://epoch.ai/data-insights/open-closed-eci-gap) and [Open vs. closed AI](https://epoch.ai/publications/open-models-report) — Epoch AI
- [How much does it cost to train frontier AI models?](https://epoch.ai/publications/how-much-does-it-cost-to-train-frontier-ai-models) — Epoch AI
- [2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) — Menlo Ventures
- [Best Proprietary LLMs (September 2026)](https://benchlm.ai/best/proprietary) — BenchLM
- [Open Source LLM Comparison Table (2026)](https://computingforgeeks.com/open-source-llm-comparison/) — ComputingForGeeks

**Tier 3 — Secondary**

- [Meta abandons open-source Llama for proprietary Muse Spark](https://thenewstack.io/meta-abandons-llama-spark/) — The New Stack
- [Gemma 4 Guide 2026](https://www.layer3labs.io/guides/gemma-4-explained) — Layer3 Labs
- [Open-Weight License Landscape 2026](https://presenc.ai/research/open-weight-license-landscape-2026) — Presenc AI
- [Best Open-Source LLMs 2026](https://irenictech.com/blog/best-open-source-llms-2026) — Irenic Tech
- [Top 5 LLMs for September 2026](https://alphacorp.ai/blog/top-llms-benchmarks-pricing-picks) — AlphaCorp
- [Anthropic Revokes OpenAI's Access to Claude](https://www.wired.com/story/anthropic-revokes-openais-access-to-claude/) — WIRED