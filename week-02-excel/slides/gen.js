const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

const INK = "1B3A34", AMBER = "D97E3F", SAGE = "5B8A82", PAPER = "FFFFFF", TEXT = "2A2A2A", MUTED = "6B6B6B";
const FONT = "Georgia", FONT_BODY = "Calibri";

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
  s.addText(title, { x: 0.7, y: 0.85, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 27, color: INK, bold: true });
}

// 1. Title
titleSlide("Excel as a Real\nAnalytical Tool", "DSDG Data Analytics — Week 2", "DATA ANALYTICS BRANCH");

// 2. The dataset
{
  let s = pres.addSlide();
  sectionHeader(s, "TODAY'S DATA", "recent-grads.csv");
  s.addText("Real outcomes for 173 college majors — pulled from an actual national survey, not a tutorial dataset.", { x: 0.7, y: 2.1, w: 11.5, h: 0.8, fontFace: FONT_BODY, fontSize: 17, color: TEXT });
  const stats = [["173", "majors"], ["21", "columns"], ["16", "major categories"], ["1", "genuinely debatable\nrelationship inside"]];
  let x = 0.7;
  stats.forEach(([num, label]) => {
    s.addText(num, { x, y: 3.1, w: 2.6, h: 1.1, fontFace: FONT, fontSize: 44, color: AMBER, bold: true, align: "left" });
    s.addText(label, { x, y: 4.15, w: 2.6, h: 0.7, fontFace: FONT_BODY, fontSize: 13, color: MUTED });
    x += 2.9;
  });
  s.addText("By the end of today you'll have an opinion, backed by a number, about something in here.", { x: 0.7, y: 5.7, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 14, color: TEXT, italic: true });
}

// 3. Data dictionary / trust the number
{
  let s = pres.addSlide();
  sectionHeader(s, "BEFORE YOU TRUST A NUMBER", "Read the data dictionary first");
  s.addText("Sample_size ranges from 2 to 4,212 across these 173 rows.", { x: 0.7, y: 2.2, w: 11, h: 0.7, fontFace: FONT, fontSize: 20, color: INK, bold: true });
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 3.1, w: 11.9, h: 2.6, rectRadius: 0.06, fill: { color: "F4F1EC" }, line: { type: "none" } });
  s.addText("32 of 173 majors have a sample under 30 — the standard cutoff for trusting a summary statistic. One is based on a sample of 2.", { x: 1.1, y: 3.4, w: 11.1, h: 0.8, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
  s.addText("A major's salary figure and its reliability are two different questions. A real dataset makes you decide how much to trust it — a cleaned classroom dataset never asks.", { x: 1.1, y: 4.35, w: 11.1, h: 1.1, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 4. Core moves overview
{
  let s = pres.addSlide();
  sectionHeader(s, "CORE EXCEL MOVES", "Every skill, in service of a question");
  const rows = [
    ["Sort & filter", "\u201cWhich majors have the highest unemployment rate — and do you still trust that ranking once you check Sample_size?\u201d"],
    ["A calculated column", "\u201cHow many graduates end up in a job outside their field?\u201d — build Underemployment_rate from scratch."],
    ["Pivot table", "\u201cWhich Major_category has the best median salary and the best employment rate?\u201d"],
  ];
  let y = 2.25;
  rows.forEach(([t, q], i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.6, h: 0.6, fontFace: FONT, fontSize: 24, color: AMBER, bold: true });
    s.addText(t, { x: 1.4, y: y-0.02, w: 3.0, h: 1.2, fontFace: FONT_BODY, fontSize: 16, color: INK, bold: true, valign: "top" });
    s.addText(q, { x: 4.6, y: y-0.02, w: 7.9, h: 1.2, fontFace: FONT_BODY, fontSize: 13.5, color: TEXT, valign: "top", italic: true });
    y += 1.35;
  });
}

// 5. Feature engineering formula
{
  let s = pres.addSlide();
  sectionHeader(s, "FEATURE ENGINEERING", "A column that didn't exist");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.3, w: 11.9, h: 1.3, rectRadius: 0.06, fill: { color: INK }, line: { type: "none" } });
  s.addText("Underemployment_rate = (Non_college_jobs + Low_wage_jobs) / Employed", { x: 1.1, y: 2.3, w: 11.1, h: 1.3, fontFace: "Courier New", fontSize: 16, color: PAPER, bold: true, align: "center", valign: "middle" });
  s.addText("\u201cYou just built a column that didn't exist. That's most of what an analyst actually does — raw columns rarely answer the real question by themselves.\u201d", { x: 0.7, y: 4.0, w: 11, h: 1.3, fontFace: FONT_BODY, fontSize: 16, color: TEXT, italic: true });
}

// 6. The relationship worth arguing about
{
  let s = pres.addSlide();
  sectionHeader(s, "THE RELATIONSHIP WORTH ARGUING ABOUT", "ShareWomen vs. Median salary");
  s.addText("=CORREL(ShareWomen, Median)  ≈  −0.62", { x: 0.7, y: 2.15, w: 11, h: 0.6, fontFace: "Courier New", fontSize: 20, color: AMBER, bold: true });
  s.addText("A real, meaningfully negative correlation. Sit with it for a minute before explaining it away.", { x: 0.7, y: 2.85, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 3.65, w: 11.9, h: 2.2, rectRadius: 0.06, fill: { color: "F4F1EC" }, line: { type: "none" } });
  s.addText("Name three different explanations for this pattern that don't all reduce to \u201cdiscrimination\u201d or \u201ccoincidence.\u201d", { x: 1.1, y: 3.9, w: 11.1, h: 0.6, fontFace: FONT_BODY, fontSize: 16, color: INK, bold: true });
  s.addText("The goal isn't a conclusion — it's the instinct to ask \u201cwhat else could explain this\u201d before repeating a correlation as if it were a cause.", { x: 1.1, y: 4.6, w: 11.1, h: 1.0, fontFace: FONT_BODY, fontSize: 13.5, color: MUTED, italic: true });
}

// 7. Open exploration
{
  let s = pres.addSlide();
  s.background = { color: INK };
  s.addText("OPEN EXPLORATION — 25 MIN", { x: 0.7, y: 0.7, w: 9, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: AMBER, bold: true, charSpacing: 2 });
  s.addText("Find one relationship you didn't expect", { x: 0.7, y: 1.15, w: 11.3, h: 1.3, fontFace: FONT, fontSize: 30, color: PAPER, bold: true });
  s.addText("...using at least one column you had to build yourself.", { x: 0.7, y: 2.3, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 18, color: "D8E4E0", italic: true });
  const notes = ["No approved question list — that's the point.", "Stuck? → docs/asking-better-analytical-questions.md", "Finished early? Go find a second, harder one."];
  let y = 3.6;
  notes.forEach((n) => {
    s.addText("•", { x: 0.7, y, w: 0.3, h: 0.5, fontSize: 16, color: AMBER, bold: true });
    s.addText(n, { x: 1.05, y, w: 10.5, h: 0.5, fontFace: FONT_BODY, fontSize: 15, color: "E8E8E8" });
    y += 0.6;
  });
}

// 8. Wrap-up
{
  let s = pres.addSlide();
  sectionHeader(s, "NEXT WEEK", "From spreadsheet to dashboard");
  s.addText("Same dataset, Power BI this time — because a finding someone has to take your word for isn't a finding yet.", { x: 0.7, y: 2.3, w: 11, h: 1.2, fontFace: FONT, fontSize: 22, color: INK, bold: true });
  s.addText("Bring whatever you built today — your engineered column carries forward.", { x: 0.7, y: 3.6, w: 10.8, h: 0.8, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
  s.addText("DSDG DATA ANALYTICS", { x: 0.7, y: 6.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 11, color: MUTED, charSpacing: 2, bold: true });
}

pres.writeFile({ fileName: "week-02-slides.pptx" }).then(() => console.log("done"));
