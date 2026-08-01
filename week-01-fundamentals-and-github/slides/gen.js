const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

// Palette
const INK = "1B3A34";      // deep pine — primary dark
const AMBER = "D97E3F";    // warm accent
const SAGE = "5B8A82";     // muted secondary
const PAPER = "FFFFFF";
const TEXT = "2A2A2A";
const MUTED = "6B6B6B";

const FONT = "Georgia";
const FONT_BODY = "Calibri";

function titleSlide(title, subtitle, tag) {
  let s = pres.addSlide();
  s.background = { color: INK };
  s.addText(tag, { x: 0.7, y: 0.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: AMBER, charSpacing: 2, bold: true });
  s.addText(title, { x: 0.7, y: 2.6, w: 11.5, h: 1.8, fontFace: FONT, fontSize: 40, color: PAPER, bold: true, valign: "top" });
  s.addText(subtitle, { x: 0.7, y: 4.1, w: 11, h: 0.8, fontFace: FONT_BODY, fontSize: 18, color: "D8E4E0" });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 2.35, w: 1.4, h: 0.05, fill: { color: AMBER } });
  return s;
}

function sectionHeader(s, kicker, title) {
  s.background = { color: PAPER };
  s.addText(kicker, { x: 0.7, y: 0.5, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: AMBER, bold: true, charSpacing: 2 });
  s.addText(title, { x: 0.7, y: 0.85, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 28, color: INK, bold: true });
}

// 1. Title
titleSlide("Foundations, Careers,\nand Your First Commit", "DSDG Data Analytics — Week 1", "DATA ANALYTICS BRANCH");

// 2. Agenda
{
  let s = pres.addSlide();
  sectionHeader(s, "TODAY", "Agenda");
  const items = [
    ["01", "What Data Analytics actually is", "...and how it differs from Data Science, Engineering, and Consulting"],
    ["02", "Career paths & outcomes", "Where this branch leads, backed by real hiring data"],
    ["03", "GitHub quickstart", "Five commands you'll use almost every week this semester"],
    ["04", "Hands-on: your first commit", "Low-stakes, real repo, real workflow"],
  ];
  let y = 2.15;
  items.forEach(([num, t, sub]) => {
    s.addText(num, { x: 0.7, y, w: 0.9, h: 0.9, fontFace: FONT, fontSize: 26, color: AMBER, bold: true });
    s.addText(t, { x: 1.7, y: y+0.02, w: 10.5, h: 0.5, fontFace: FONT_BODY, fontSize: 18, color: INK, bold: true });
    s.addText(sub, { x: 1.7, y: y+0.5, w: 10.5, h: 0.5, fontFace: FONT_BODY, fontSize: 13, color: MUTED });
    y += 1.15;
  });
}

// 3. What is Data Analytics — role comparison
{
  let s = pres.addSlide();
  sectionHeader(s, "FUNDAMENTALS", "Four roles, one foundation");
  const roles = [
    ["Data Analyst", "Backward-looking", "Answers a specific question with data that mostly already exists. Communicates findings."],
    ["Data Scientist", "Forward-looking", "Builds predictive models on messier, larger data. Lives in code full-time."],
    ["Data Engineer", "Infrastructure", "Builds the pipelines that get raw data into a usable state in the first place."],
    ["Consultant", "Client-facing", "Packages analysis into a business recommendation — often with several disciplines at once."],
  ];
  const colW = 2.85, gap = 0.25, startX = 0.7;
  roles.forEach(([title, tag, desc], i) => {
    const x = startX + i * (colW + gap);
    s.addShape(pres.ShapeType.rect, { x, y: 2.1, w: colW, h: 4.1, fill: { color: "F4F1EC" }, line: { type: "none" } });
    s.addText(tag.toUpperCase(), { x: x+0.25, y: 2.35, w: colW-0.5, h: 0.35, fontFace: FONT_BODY, fontSize: 10, color: AMBER, bold: true, charSpacing: 1.5 });
    s.addText(title, { x: x+0.25, y: 2.65, w: colW-0.5, h: 0.7, fontFace: FONT, fontSize: 17, color: INK, bold: true, valign: "top" });
    s.addText(desc, { x: x+0.25, y: 3.45, w: colW-0.5, h: 2.5, fontFace: FONT_BODY, fontSize: 12, color: TEXT, valign: "top", lineSpacingMultiple: 1.25 });
  });
}

// 4. The common foundation
{
  let s = pres.addSlide();
  sectionHeader(s, "FUNDAMENTALS", "The honest through-line");
  s.addText("All four roles need the same foundation:", { x: 0.7, y: 2.2, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 18, color: TEXT });
  const pillars = ["SQL", "Statistics", "Clear communication"];
  let x = 0.7;
  pillars.forEach((p) => {
    s.addShape(pres.ShapeType.roundRect, { x, y: 3.1, w: 3.5, h: 1.3, rectRadius: 0.08, fill: { color: INK }, line: { type: "none" } });
    s.addText(p, { x, y: 3.1, w: 3.5, h: 1.3, fontFace: FONT, fontSize: 20, color: PAPER, bold: true, align: "center", valign: "middle" });
    x += 3.85;
  });
  s.addText("That foundation is this branch. Which direction you go from here — Analyst-track roles, a Data Science path, or our Consulting branch — is a later decision, not a week-1 one.", { x: 0.7, y: 4.9, w: 10.8, h: 1.2, fontFace: FONT_BODY, fontSize: 15, color: MUTED, italic: true });
}

// 5. Career pipeline
{
  let s = pres.addSlide();
  sectionHeader(s, "CAREER PATHS", "Where this branch leads");
  const stages = ["Data Analytics\nBranch", "Portfolio +\nCapstone", "Consulting Branch\n(selective)", "Real client\nengagements"];
  const w = 2.4, h = 1.5, y = 2.6, arrowW = 0.45;
  let x = 0.7;
  stages.forEach((st, i) => {
    const fill = i === 2 ? AMBER : (i === 3 ? SAGE : INK);
    s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { type: "none" } });
    s.addText(st, { x, y, w, h, fontFace: FONT_BODY, fontSize: 14, color: PAPER, bold: true, align: "center", valign: "middle" });
    x += w;
    if (i < stages.length - 1) {
      s.addText("→", { x, y, w: arrowW, h, fontFace: FONT_BODY, fontSize: 22, color: MUTED, align: "center", valign: "middle" });
      x += arrowW;
    }
  });
  s.addText("Doing well here — and specifically, a strong capstone at semester's end — is the most direct path to Consulting.", { x: 0.7, y: 4.7, w: 11, h: 0.8, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
}

// 6. Hiring signal chart
{
  let s = pres.addSlide();
  sectionHeader(s, "CAREER PATHS", "What entry-level postings actually ask for");
  s.addChart(pres.ChartType.bar, [
    {
      name: "% of entry-level Data Analyst postings",
      labels: ["SQL", "Excel / Sheets", "A BI tool", "Python", "Communication\n(named explicitly)"],
      values: [78, 70, 40, 38, 27],
    },
  ], {
    x: 0.7, y: 2.15, w: 11.9, h: 4.3,
    barDir: "bar",
    showTitle: false,
    showValue: true, dataLabelPosition: "outEnd", dataLabelColor: TEXT, dataLabelFontSize: 12,
    chartColors: [AMBER],
    catAxisLabelColor: TEXT, catAxisLabelFontSize: 12,
    valAxisLabelColor: MUTED, valAxisLabelFontSize: 10, valAxisHidden: false,
    valGridLine: { color: "E5E5E5", size: 1 },
    catGridLine: { style: "none" },
    showLegend: false,
    barGapWidthPct: 40,
  });
  s.addText("Figures are directional averages across current job-market analyses — treat rankings as more reliable than exact percentages.", { x: 0.7, y: 6.85, w: 11.5, h: 0.4, fontFace: FONT_BODY, fontSize: 10, color: MUTED, italic: true });
}

// 7. Why GitHub
{
  let s = pres.addSlide();
  sectionHeader(s, "GITHUB QUICKSTART", "Why we use it from week one");
  const reasons = [
    ["It's the record", "Every dataset, script, and deck lives in one versioned place — not scattered across group chats."],
    ["It's the first rep", "By the time this matters for an internship, it's already a habit — not something to cram."],
    ["It's what real teams use", "Every branch this maps to — Consulting included — works this way."],
  ];
  let y = 2.3;
  reasons.forEach(([t, d]) => {
    s.addShape(pres.ShapeType.rect, { x: 0.7, y, w: 0.08, h: 1.15, fill: { color: AMBER }, line: { type: "none" } });
    s.addText(t, { x: 1.0, y: y-0.05, w: 10.8, h: 0.5, fontFace: FONT, fontSize: 18, color: INK, bold: true });
    s.addText(d, { x: 1.0, y: y+0.45, w: 10.8, h: 0.7, fontFace: FONT_BODY, fontSize: 13, color: TEXT });
    y += 1.5;
  });
}

// 8. The 5 commands
{
  let s = pres.addSlide();
  sectionHeader(s, "GITHUB QUICKSTART", "Five commands, in order");
  const cmds = ["git clone", "git pull", "git add", "git commit -m \"...\"", "git push"];
  const descs = ["once, ever", "start of every session", "stage a change", "save with a note", "send it up"];
  const w = 1.95, arrowW = 0.3, h = 1.1;
  let x = 0.7;
  cmds.forEach((c, i) => {
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.6, w, h, rectRadius: 0.06, fill: { color: i % 2 === 0 ? INK : SAGE }, line: { type: "none" } });
    s.addText(c, { x, y: 2.6, w, h, fontFace: "Courier New", fontSize: 11, color: PAPER, bold: true, align: "center", valign: "middle" });
    s.addText(descs[i], { x, y: 3.85, w, h: 0.6, fontFace: FONT_BODY, fontSize: 10, color: MUTED, align: "center" });
    x += w;
    if (i < cmds.length - 1) {
      s.addText("→", { x, y: 2.6, w: arrowW, h, fontSize: 15, color: MUTED, align: "center", valign: "middle" });
      x += arrowW;
    }
  });
  s.addText("Full reference: github-quickstart-cheatsheet.md — keep it linked all semester.", { x: 0.7, y: 5.2, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 13, color: TEXT, italic: true });
}

// 9. Hands-on
{
  let s = pres.addSlide();
  s.background = { color: INK };
  s.addText("HANDS-ON", { x: 0.7, y: 0.7, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: AMBER, bold: true, charSpacing: 2 });
  s.addText("Your first commit", { x: 0.7, y: 1.15, w: 11, h: 1, fontFace: FONT, fontSize: 32, color: PAPER, bold: true });
  const steps = [
    "Clone this repo",
    "Open resources/welcome-wall.md — add your name + a topic you'd love to analyze",
    "git add → git commit -m \"...\" → git push",
    "We'll pull up the commit history together",
  ];
  let y = 2.6;
  steps.forEach((st, i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.6, h: 0.6, fontFace: FONT, fontSize: 20, color: AMBER, bold: true });
    s.addText(st, { x: 1.4, y: y+0.03, w: 10.5, h: 0.6, fontFace: FONT_BODY, fontSize: 16, color: "E8E8E8" });
    y += 0.85;
  });
}

// 10. Wrap-up
{
  let s = pres.addSlide();
  sectionHeader(s, "NEXT WEEK", "See you Wednesday");
  s.addText("Real Excel work on a dataset about what actually happens to people after they pick a major.", { x: 0.7, y: 2.4, w: 10.8, h: 1, fontFace: FONT, fontSize: 22, color: INK, bold: true });
  s.addText("173 majors. Real earnings and employment data. At least one relationship in there that most people find genuinely surprising.", { x: 0.7, y: 3.5, w: 10.5, h: 1, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
  s.addText("DSDG DATA ANALYTICS", { x: 0.7, y: 6.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 11, color: MUTED, charSpacing: 2, bold: true });
}

pres.writeFile({ fileName: "week-01-slides.pptx" }).then(() => console.log("done"));
