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
titleSlide("From Spreadsheet\nto Dashboard", "DSDG Data Analytics — Week 3 · Power BI", "DATA ANALYTICS BRANCH");

// 2. Setup note (Mac/Windows)
{
  let s = pres.addSlide();
  sectionHeader(s, "BEFORE WE START", "A logistics note");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.2, w: 11.9, h: 1.6, rectRadius: 0.06, fill: { color: "F4F1EC" }, line: { type: "none" } });
  s.addText("Power BI Desktop is Windows-only.", { x: 1.1, y: 2.42, w: 11.1, h: 0.5, fontFace: FONT_BODY, fontSize: 18, color: INK, bold: true });
  s.addText("Mac users: pair with a Windows laptop, or use the browser-based Power BI Service.", { x: 1.1, y: 2.95, w: 11.1, h: 0.6, fontFace: FONT_BODY, fontSize: 14, color: TEXT });
  s.addText("Full breakdown: resources/power-bi-setup-notes.md", { x: 0.7, y: 4.15, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: MUTED, italic: true });
}

// 3. Reconnect to last week
{
  let s = pres.addSlide();
  sectionHeader(s, "LAST WEEK → THIS WEEK", "A spreadsheet finding vs. a dashboard");
  s.addText("\u201cThat sentence is true, but if you handed someone a spreadsheet and said \u2018trust me,\u2019 they'd have to redo your work to believe you.\u201d", { x: 0.7, y: 2.3, w: 11, h: 1.3, fontFace: FONT, fontSize: 20, color: INK, italic: true });
  s.addText("A dashboard lets someone check your claim themselves, in about ten seconds. That's the whole point of today.", { x: 0.7, y: 3.75, w: 10.8, h: 1.0, fontFace: FONT_BODY, fontSize: 16, color: TEXT, bold: true });
}

// 4. Orientation - 3 panes
{
  let s = pres.addSlide();
  sectionHeader(s, "ORIENTATION", "Three panes");
  const panes = [["Report", "what you're building"], ["Data", "the table — same columns as last week"], ["Model", "relationships between tables — only one table today"]];
  const w = 3.7, gap = 0.35;
  let x = 0.7;
  panes.forEach(([t, d], i) => {
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.3, w, h: 2.6, rectRadius: 0.06, fill: { color: i === 0 ? INK : "F4F1EC" }, line: { type: "none" } });
    s.addText(t, { x: x+0.3, y: 2.55, w: w-0.6, h: 0.6, fontFace: FONT, fontSize: 19, color: i === 0 ? PAPER : INK, bold: true });
    s.addText(d, { x: x+0.3, y: 3.2, w: w-0.6, h: 1.4, fontFace: FONT_BODY, fontSize: 13, color: i === 0 ? "D8E4E0" : TEXT, valign: "top" });
    x += w + gap;
  });
  s.addText("First build, live: a bar chart of average Median salary by Major_category. Then a scatter of ShareWomen vs. Median — click a point and watch it filter everything else.", { x: 0.7, y: 5.3, w: 11.5, h: 1.1, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 5. Guided build checklist
{
  let s = pres.addSlide();
  sectionHeader(s, "GUIDED BUILD — 25 MIN", "Rebuild, then add a third visual");
  const items = [
    "Bar chart: average Median salary by Major_category",
    "Scatter plot: ShareWomen (x) vs. Median (y)",
    "Slicer on Major_category — filter the whole dashboard at once",
    "Your choice: a third visual, ideally reusing your Week 2 engineered column",
  ];
  let y = 2.3;
  items.forEach((t, i) => {
    s.addShape(pres.ShapeType.ellipse, { x: 0.7, y: y+0.05, w: 0.4, h: 0.4, fill: { color: i < 3 ? SAGE : AMBER }, line: { type: "none" } });
    s.addText(String(i+1), { x: 0.7, y: y+0.05, w: 0.4, h: 0.4, fontFace: FONT_BODY, fontSize: 14, color: PAPER, bold: true, align: "center", valign: "middle" });
    s.addText(t, { x: 1.3, y, w: 10.8, h: 0.55, fontFace: FONT_BODY, fontSize: 16, color: TEXT, valign: "middle" });
    y += 0.85;
  });
  s.addText("\u201cA chart only you can interpret isn't a finding yet — it's a draft.\u201d", { x: 0.7, y: 5.9, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: INK, italic: true, bold: true });
}

// 6. Critique exercise
{
  let s = pres.addSlide();
  sectionHeader(s, "DASHBOARDS FOR A REAL AUDIENCE", "The five-second test");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.2, w: 11.9, h: 1.3, rectRadius: 0.06, fill: { color: INK }, line: { type: "none" } });
  s.addText("\u201cIf you had never seen this dataset, what would you understand from this screen in the first five seconds?\u201d", { x: 1.1, y: 2.2, w: 11.1, h: 1.3, fontFace: FONT_BODY, fontSize: 17, color: PAPER, bold: true, align: "center", valign: "middle" });
  s.addText("Common fixes, worth naming before they come up:", { x: 0.7, y: 3.85, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: MUTED });
  const fixes = ["Unlabeled axes", "A color scheme with no clear meaning", "Too many visuals competing for attention", "A title that names the chart type, not the finding"];
  let y = 4.3;
  fixes.forEach((f) => {
    s.addText("•  " + f, { x: 0.9, y, w: 10.8, h: 0.4, fontFace: FONT_BODY, fontSize: 14, color: TEXT });
    y += 0.42;
  });
}

// 7. Wrap-up
{
  let s = pres.addSlide();
  sectionHeader(s, "NEXT WEEK", "Week 4 is yours");
  s.addText("Same dataset. Your own question, from scratch. Excel + Power BI, no script.", { x: 0.7, y: 2.3, w: 11, h: 1.0, fontFace: FONT, fontSize: 22, color: INK, bold: true });
  s.addText("Everything the last two weeks taught you, now without a script — presented to the rest of the branch.", { x: 0.7, y: 3.5, w: 10.8, h: 0.8, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
  s.addText("DSDG DATA ANALYTICS", { x: 0.7, y: 6.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 11, color: MUTED, charSpacing: 2, bold: true });
}

pres.writeFile({ fileName: "week-03-slides.pptx" }).then(() => console.log("done"));
