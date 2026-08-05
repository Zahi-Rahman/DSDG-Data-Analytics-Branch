const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

const BLUE = "1C3F60", ORANGE = "D97E3F", GREEN = "5B8A82", PAPER = "FFFFFF", OFFWHITE = "F4F1EC", TEXT = "2A2A2A", MUTED = "6B6B6B";
const FONT = "Georgia", FONT_BODY = "Calibri";

function titleSlide(title, subtitle, tag) {
  let s = pres.addSlide();
  s.background = { color: BLUE };
  s.addText(tag, { x: 0.7, y: 0.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: ORANGE, charSpacing: 2, bold: true });
  s.addText(title, { x: 0.7, y: 2.5, w: 11.5, h: 1.8, fontFace: FONT, fontSize: 40, color: PAPER, bold: true, valign: "top" });
  s.addText(subtitle, { x: 0.7, y: 4.0, w: 11, h: 0.8, fontFace: FONT_BODY, fontSize: 18, color: "D6E2EA" });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 2.25, w: 1.4, h: 0.05, fill: { color: ORANGE } });
  return s;
}
function sectionHeader(s, kicker, title) {
  s.background = { color: PAPER };
  s.addText(kicker, { x: 0.7, y: 0.5, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: ORANGE, bold: true, charSpacing: 2 });
  s.addText(title, { x: 0.7, y: 0.85, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 27, color: BLUE, bold: true });
}

// 1. Title
titleSlide("Excel as a Real\nAnalytical Tool", "DSDG Data Analytics — Week 2", "DATA ANALYTICS BRANCH");

// 2. The dataset + trust caveat
{
  let s = pres.addSlide();
  sectionHeader(s, "TODAY'S DATA", "recent-grads.csv");
  s.addText("173 college majors. Real employment and salary outcomes from an actual national survey — not a tutorial dataset.", { x: 0.7, y: 2.0, w: 11.5, h: 0.7, fontFace: FONT_BODY, fontSize: 16, color: TEXT });
  const stats = [["173", "majors"], ["21", "columns"], ["2\u20134,212", "range of Sample_size —\nsmall means less reliable"]];
  let x = 0.7;
  stats.forEach(([num, label]) => {
    s.addText(num, { x, y: 2.95, w: 3.6, h: 1.0, fontFace: FONT, fontSize: 38, color: ORANGE, bold: true });
    s.addText(label, { x, y: 3.9, w: 3.6, h: 0.8, fontFace: FONT_BODY, fontSize: 13, color: MUTED });
    x += 3.9;
  });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 5.1, w: 11.9, h: 1.1, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("32 of 173 majors have a sample under 30. A major's salary figure and its reliability are two different questions — check the data dictionary before you trust either.", { x: 1.0, y: 5.3, w: 11.3, h: 0.7, fontFace: FONT_BODY, fontSize: 13.5, color: TEXT, valign: "middle" });
}

// 3. Core Excel moves
{
  let s = pres.addSlide();
  sectionHeader(s, "CORE EXCEL MOVES", "One question, one tool, in order");
  const rows = [
    ["Sort & filter", "Highest unemployment rate — still trust it once you check Sample_size?"],
    ["A calculated column", "How many graduates end up outside their field? Build Underemployment_rate."],
    ["Pivot table", "Which Major_category has the best median salary and employment rate?"],
  ];
  let y = 2.2;
  rows.forEach(([t, q], i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.6, h: 0.6, fontFace: FONT, fontSize: 24, color: ORANGE, bold: true });
    s.addText(t, { x: 1.4, y: y-0.02, w: 3.0, h: 1.2, fontFace: FONT_BODY, fontSize: 16, color: BLUE, bold: true, valign: "top" });
    s.addText(q, { x: 4.6, y: y-0.02, w: 7.9, h: 1.2, fontFace: FONT_BODY, fontSize: 14, color: TEXT, valign: "top" });
    y += 1.35;
  });
}

// 4. Feature engineering
{
  let s = pres.addSlide();
  sectionHeader(s, "FEATURE ENGINEERING", "A column that didn't exist");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.3, w: 11.9, h: 1.3, rectRadius: 0.06, fill: { color: BLUE }, line: { type: "none" } });
  s.addText("Underemployment_rate = (Non_college_jobs + Low_wage_jobs) / Employed", { x: 1.1, y: 2.3, w: 11.1, h: 1.3, fontFace: "Courier New", fontSize: 16, color: PAPER, bold: true, align: "center", valign: "middle" });
  s.addText("Most of an analyst's job is exactly this. Raw columns rarely answer the real question alone.", { x: 0.7, y: 4.0, w: 10.8, h: 0.8, fontFace: FONT_BODY, fontSize: 16, color: TEXT });
}

// 5. The relationship worth arguing about
{
  let s = pres.addSlide();
  sectionHeader(s, "THE RELATIONSHIP WORTH ARGUING ABOUT", "ShareWomen vs. Median salary");
  s.addText("=CORREL(ShareWomen, Median)  \u2248  \u22120.62", { x: 0.7, y: 2.05, w: 11, h: 0.6, fontFace: "Courier New", fontSize: 20, color: ORANGE, bold: true });
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.85, w: 11.9, h: 2.3, rectRadius: 0.06, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("Name three explanations for this pattern that aren't just \u201cdiscrimination\u201d or \u201ccoincidence.\u201d", { x: 1.1, y: 3.1, w: 11.1, h: 0.6, fontFace: FONT_BODY, fontSize: 16, color: BLUE, bold: true });
  s.addText("The goal isn't a conclusion. It's the habit of asking what else could explain a pattern before repeating a correlation as a cause.", { x: 1.1, y: 3.75, w: 11.1, h: 1.0, fontFace: FONT_BODY, fontSize: 13.5, color: MUTED });
}

// 6. Open exploration
{
  let s = pres.addSlide();
  s.background = { color: BLUE };
  s.addText("OPEN EXPLORATION \u2014 25 MIN", { x: 0.7, y: 0.7, w: 9, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: ORANGE, bold: true, charSpacing: 2 });
  s.addText("Find one relationship\nyou didn't expect", { x: 0.7, y: 1.15, w: 11.3, h: 1.9, fontFace: FONT, fontSize: 30, color: PAPER, bold: true });
  s.addText("Using at least one column you built yourself. No approved question list.", { x: 0.7, y: 3.15, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 17, color: "D6E2EA" });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 4.0, w: 11.9, h: 0.02, fill: { color: GREEN } });
  s.addText("Stuck? docs/asking-better-analytical-questions.md   \u00b7   Finished early? Find a second, harder one.", { x: 0.7, y: 4.3, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: "D6E2EA" });
}

// 7. Wrap-up
{
  let s = pres.addSlide();
  sectionHeader(s, "NEXT WEEK", "From spreadsheet to dashboard");
  s.addText("Same dataset, Tableau this time.", { x: 0.7, y: 2.3, w: 11, h: 0.9, fontFace: FONT, fontSize: 26, color: BLUE, bold: true });
  s.addText("A finding someone has to take your word for isn't a finding yet. Bring whatever you built today — your column carries forward.", { x: 0.7, y: 3.4, w: 10.8, h: 1.0, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
}

pres.writeFile({ fileName: "week-02-slides.pptx" }).then(() => console.log("done"));
