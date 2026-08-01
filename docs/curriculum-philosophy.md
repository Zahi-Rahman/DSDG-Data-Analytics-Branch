# Curriculum Philosophy

Short version: **analytical thinking is the actual subject. SQL, Python, Excel, and Power BI are how you practice it.** Every workshop should be able to answer "why does this matter for the analysis" before it answers "here's the syntax."

## Three decisions everything else follows from

**1. Skills are taught blocked, but used combined.**
A dedicated Excel week teaches Excel; a dedicated SQL week teaches SQL. But no mini-project is ever "the Excel project" in isolation — once a skill has been introduced, every project after that keeps using it alongside whatever's new. Cognitive science on skill retention is fairly one-sided here: practicing skills in isolation (blocked) produces faster short-term performance, but mixing skills together (interleaved) produces meaningfully better long-term retention and — more importantly for us — better judgment about *which* tool fits a given question, which is the actual job. Pure interleaving from day one doesn't work for total beginners either, which is why the lessons themselves stay blocked even though the projects don't.

**2. Real, messy, non-toy data — always.**
No Titanic, no Iris. Every dataset should be one members haven't seen a hundred tutorials use, should have genuine data-quality issues worth noticing (missing values, unreliable small samples, ambiguous categories), and should be rich enough that two different groups can each find a real, different, defensible insight. If a dataset only supports one "correct" finding, it's teaching syntax, not analysis.

**3. Themes rotate; skills don't reset.**
Each project cycle uses a different real-world domain (this month: higher-ed/career outcomes; later cycles: sports, public health, a business-style capstone). This isn't just for variety — when every team works from the identical dataset and prompt, portfolios end up looking interchangeable, which is exactly what we don't want members walking away with. A rotating theme means members are more likely to find a question they personally care about, which is where the "creative" half of analytical thinking actually comes from.

## What this means in a session, concretely

- Never introduce a formula, query, or chart type without first stating the question it's in service of.
- When a group asks "is this the right approach," the answer is usually another question ("what are you trying to find out?"), not a syntax fix.
- Encourage groups toward *different* questions on the same dataset rather than steering everyone toward the same "intended" finding.
- Flag data-quality issues out loud when they come up (a tiny sample size, a suspicious outlier) instead of quietly cleaning them away before members see them — noticing those is the skill.
