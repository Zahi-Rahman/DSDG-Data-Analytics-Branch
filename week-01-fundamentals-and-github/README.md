# Week 1: What This Branch Is, What This Field Is, and Your First Commit

Format: Lesson and hands-on. Length: about 75 minutes. Slides: slides/week-01-slides.pptx

## Goals

Members can explain the difference between data analytics, data science, and the other data-adjacent roles. They know where this branch leads if they want to go further. They can clone a repo, commit, and push.

## 0. Welcome (5 min)

Quick intros if the group is small: name, major, year, one dataset they would love to dig into if they could. If the group is large, skip intros. Poll instead by show of hands: who has used Excel seriously, who has touched SQL, who has coded at all. This tells you whether the GitHub section later needs to move slow or fast.

One line framing for the semester: this branch is about asking a good question of a messy dataset and defending the answer. Tools are just how you practice that. It builds toward a capstone presented to the whole club at the end of the semester, on a topic members choose themselves.

## 1. Data Analytics versus Data Science versus everything else (15 min)

Ask the room to guess before you explain. Write four role names on the board: Data Analyst, Data Scientist, Data Engineer, Consultant. Get guesses first.

The rough split, and real job titles overlap more than this suggests:

Data Analyst answers a specific question with data that mostly already exists. Backward looking: what happened, and why.

Data Scientist builds predictive models on messier, larger data, more code heavy. Forward looking: what is likely next.

Data Engineer builds the pipelines that get data usable in the first place.

Consultant packages analysis into a business recommendation for a client, often working with people from several disciplines. Tie this to our own branch structure directly.

All four need the same foundation: SQL, some statistics, and the ability to explain a finding to someone who was not in the room. That foundation is this branch. Which direction from here, whether Analyst track, Data Science, or an application to Consulting, is a later decision.

## 2. Career paths and outcomes (15 min)

Use current numbers, not vibes. Ask your Branch Lead for the latest each semester. As of this curriculum: SQL and Excel show up in most entry level analyst postings, Python is a fast growing differentiator, and communication is named almost as often as any technical tool.

Every project this semester uses real data, not textbook data, because that is what gets people hired. Connect it to the pipeline: doing well here, especially building a strong capstone, is the most direct path to the Consulting branch.

Optional hook for next week: week 2's dataset covers every unit the National Park Service manages, not just the famous parks. There is a genuinely surprising pattern in it. Do not give it away.

## 3. GitHub quickstart (30 min), hands-on

Framing: nobody needs to understand git deeply today. Five commands, used almost every week. The goal is muscle memory.

### Setup (5 min)

Everyone needs a free GitHub account and git installed. It is built into Mac and Linux. Windows needs Git for Windows. Send this as a reminder before the session, not during it. Installs eat time unpredictably.

### The five commands (10 min)

Walk through resources/github-quickstart-cheatsheet.md.

git clone, to copy a repo, just once.
git pull, to get the latest, every session.
git add, to mark a file as ready to save.
git commit with a message, to save it with a note.
git push, to send it to GitHub.

### Hands-on: first commit (15 min)

Everyone clones this repo. Opens resources/welcome-wall.md and adds one line: name plus a topic they would love to analyze. Runs git add, then git commit with a message, then git push. Pull up the commit history together on GitHub.

If someone hits a merge conflict, and it is likely with everyone editing one file, walk one group through resolving it live. It is better learned now than mid project in week 10.

## 4. Wrap up (5 min)

Recap in one line each: the field, the path, the five commands. Preview week 2: real Excel work on a dataset covering every unit the National Park Service manages.

## Materials in this folder

slides/week-01-slides.pptx
resources/github-quickstart-cheatsheet.md
resources/welcome-wall.md
