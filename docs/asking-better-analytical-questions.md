# Asking Better Analytical Questions

"Explore the dataset and find something interesting" is intimidating without a starting point. This is a short reference for members (and officers coaching groups) once a project moves from guided exercises into open exploration — first used in Week 2, referenced all semester.

## Four moves that reliably turn a flat dataset into a real question

**1. Compare a rate, not a total.**
"Which major has the most graduates" is a fact. "Which major has the best employment outcome *relative to its size*" is a question — it requires you to build a rate (a ratio, a percentage, a per-capita figure) instead of reading a column straight off the sheet. Rates are almost always more honest than totals, and building one is feature engineering.

**2. Ask what a relationship between two columns might mean — then ask what else could explain it.**
If two columns move together, the reflex question is "does A cause B?" The better second question is "what's a *different* explanation for this pattern that has nothing to do with A causing B?" A group that can name two plausible explanations for a correlation is doing real analysis; a group that reports the correlation and stops is doing data retrieval.

**3. Split the data a different way than the obvious one.**
Datasets usually come with one built-in grouping (a category column). Try a second, self-built grouping — a size cutoff, a rate threshold, a custom bucket — and see if the pattern holds inside each group. Patterns that vanish once you split the data are often the most interesting finding of all.

**4. Ask "reliable for whom?" before trusting a summary number.**
A median, an average, or a "top 5" list can be built from five data points or five thousand. Before presenting a number, check what it's actually built on. If the answer is "not much," that's not a reason to hide the finding — it's the finding.

## A prompt for groups that are stuck

Have each person write down one column they find surprising or one they don't understand, without discussing it first. Compare notes. The disagreements are usually where the real question is hiding.
