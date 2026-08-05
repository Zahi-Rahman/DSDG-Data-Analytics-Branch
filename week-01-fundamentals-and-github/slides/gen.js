const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

// Palette: blue (primary), orange (accent), white/off-white, green used once as a rare accent
const BLUE = "1C3F60";
const ORANGE = "D97E3F";
const GREEN = "5B8A82";
const PAPER = "FFFFFF";
const OFFWHITE = "F4F1EC";
const TEXT = "2A2A2A";
const MUTED = "6B6B6B";
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
titleSlide("Foundations, Careers,\nand Your First Commit", "DSDG Data Analytics — Week 1", "DATA ANALYTICS BRANCH");

// 2. Agenda
{
  let s = pres.addSlide();
  sectionHeader(s, "TODAY", "Agenda");
  const items = ["What Data Analytics is, and how it's different", "Career paths, backed by real hiring data", "GitHub quickstart — five commands", "Hands-on: your first commit"];
  let y = 2.2;
  items.forEach((t, i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.9, h: 0.8, fontFace: FONT, fontSize: 26, color: ORANGE, bold: true });
    s.addText(t, { x: 1.7, y: y+0.1, w: 10, h: 0.7, fontFace: FONT_BODY, fontSize: 19, color: BLUE, valign: "middle" });
    y += 1.05;
  });
}

// 3. Four roles
{
  let s = pres.addSlide();
  sectionHeader(s, "FUNDAMENTALS", "Four roles, one foundation");
  const roles = [
    ["Data Analyst", "Answers a question with data that already exists."],
    ["Data Scientist", "Builds predictive models on messier, larger data."],
    ["Data Engineer", "Builds the pipelines that make data usable."],
    ["Consultant", "Packages analysis into a recommendation for a client."],
  ];
  const colW = 2.85, gap = 0.25, startX = 0.7;
  roles.forEach(([title, desc], i) => {
    const x = startX + i * (colW + gap);
    s.addShape(pres.ShapeType.rect, { x, y: 2.1, w: colW, h: 3.1, fill: { color: OFFWHITE }, line: { type: "none" } });
    s.addText(title, { x: x+0.25, y: 2.35, w: colW-0.5, h: 0.7, fontFace: FONT, fontSize: 16, color: BLUE, bold: true, valign: "top" });
    s.addText(desc, { x: x+0.25, y: 3.1, w: colW-0.5, h: 1.9, fontFace: FONT_BODY, fontSize: 12.5, color: TEXT, valign: "top" });
  });
  s.addText("All four need the same foundation: SQL, statistics, and clear communication. That foundation is this branch.", { x: 0.7, y: 5.5, w: 11.5, h: 0.8, fontFace: FONT_BODY, fontSize: 15, color: BLUE, bold: true });
}

// 4. Where this leads
{
  let s = pres.addSlide();
  sectionHeader(s, "CAREER PATHS", "Where this branch leads");
  const stages = ["Data Analytics\nBranch", "Portfolio +\nCapstone", "Consulting Branch\n(selective)", "Real client\nengagements"];
  const w = 2.4, h = 1.5, y = 2.5, arrowW = 0.45;
  let x = 0.7;
  stages.forEach((st, i) => {
    const fill = i === 2 ? ORANGE : BLUE;
    s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { type: "none" } });
    s.addText(st, { x, y, w, h, fontFace: FONT_BODY, fontSize: 14, color: PAPER, bold: true, align: "center", valign: "middle" });
    x += w;
    if (i < stages.length - 1) {
      s.addText("\u2192", { x, y, w: arrowW, h, fontFace: FONT_BODY, fontSize: 22, color: MUTED, align: "center", valign: "middle" });
      x += arrowW;
    }
  });
  s.addText("A strong capstone is the most direct path to Consulting.", { x: 0.7, y: 4.6, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 16, color: TEXT });
  s.addText("SQL shows up in most entry-level postings. Excel too. Python's a fast-growing plus. Communication gets named almost as often as any tool.", { x: 0.7, y: 5.5, w: 11.3, h: 1.1, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 5. Hiring chart
{
  let s = pres.addSlide();
  sectionHeader(s, "CAREER PATHS", "What entry-level postings ask for");
  s.addChart(pres.ChartType.bar, [
    { name: "% of entry-level Data Analyst postings", labels: ["SQL", "Excel / Sheets", "A BI tool", "Python", "Communication\n(named explicitly)"], values: [78, 70, 40, 38, 27] },
  ], {
    x: 0.7, y: 2.1, w: 11.9, h: 4.3, barDir: "bar",
    showTitle: false, showValue: true, dataLabelPosition: "outEnd", dataLabelColor: TEXT, dataLabelFontSize: 12,
    chartColors: [ORANGE],
    catAxisLabelColor: TEXT, catAxisLabelFontSize: 12,
    valAxisLabelColor: MUTED, valAxisLabelFontSize: 10,
    valGridLine: { color: "E5E5E5", size: 1 }, catGridLine: { style: "none" },
    showLegend: false, barGapWidthPct: 40,
  });
  s.addText("Directional averages across current job-market analyses.", { x: 0.7, y: 6.85, w: 11.5, h: 0.4, fontFace: FONT_BODY, fontSize: 10, color: MUTED, italic: true });
}

// 6. GitHub: why + commands
{
  let s = pres.addSlide();
  sectionHeader(s, "GITHUB QUICKSTART", "Five commands, used almost every week");
  s.addText("Every dataset and deck lives in one versioned place. And by the time this matters for an internship, it's already a habit.", { x: 0.7, y: 1.85, w: 11.3, h: 0.6, fontFace: FONT_BODY, fontSize: 14, color: TEXT, italic: true });
  const cmds = ["git clone", "git pull", "git add", "git commit -m \"...\"", "git push"];
  const descs = ["once, ever", "every session", "stage a change", "save with a note", "send it up"];
  const w = 1.95, arrowW = 0.3, h = 1.1;
  let x = 0.7;
  cmds.forEach((c, i) => {
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.9, w, h, rectRadius: 0.06, fill: { color: BLUE }, line: { type: "none" } });
    s.addText(c, { x, y: 2.9, w, h, fontFace: "Courier New", fontSize: 11, color: PAPER, bold: true, align: "center", valign: "middle" });
    s.addText(descs[i], { x, y: 4.15, w, h: 0.6, fontFace: FONT_BODY, fontSize: 10, color: MUTED, align: "center" });
    x += w;
    if (i < cmds.length - 1) { s.addText("\u2192", { x, y: 2.9, w: arrowW, h, fontSize: 15, color: MUTED, align: "center", valign: "middle" }); x += arrowW; }
  });
  s.addText("Full reference: github-quickstart-cheatsheet.md", { x: 0.7, y: 5.4, w: 11, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: MUTED });
}

// 7. Hands-on + wrap
{
  let s = pres.addSlide();
  s.background = { color: BLUE };
  s.addText("HANDS-ON", { x: 0.7, y: 0.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: ORANGE, bold: true, charSpacing: 2 });
  s.addText("Your first commit", { x: 0.7, y: 1.05, w: 11, h: 0.9, fontFace: FONT, fontSize: 30, color: PAPER, bold: true });
  const steps = ["Clone this repo", "Add your name + a topic you'd love to analyze to welcome-wall.md", "add \u2192 commit \u2192 push", "We'll pull up the commit history together"];
  let y = 2.25;
  steps.forEach((st, i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.6, h: 0.55, fontFace: FONT, fontSize: 19, color: ORANGE, bold: true });
    s.addText(st, { x: 1.35, y: y+0.03, w: 10.5, h: 0.55, fontFace: FONT_BODY, fontSize: 15, color: "E8E8E8" });
    y += 0.7;
  });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 5.15, w: 11.9, h: 0.02, fill: { color: GREEN } });
  s.addText("Next week: real Excel work, on a dataset most people find one genuinely surprising thing in.", { x: 0.7, y: 5.45, w: 11.2, h: 0.9, fontFace: FONT_BODY, fontSize: 15, color: "D6E2EA", italic: true });
}

pres.writeFile({ fileName: "week-01-slides.pptx" }).then(() => console.log("done"));
