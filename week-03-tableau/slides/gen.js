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
  s.addText(title, { x: 0.7, y: 0.85, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 26, color: BLUE, bold: true });
}

// 1. Title
titleSlide("From Spreadsheet\nto Dashboard", "DSDG Data Analytics — Week 3 \u00b7 Tableau", "DATA ANALYTICS BRANCH");

// 2. Setup
{
  let s = pres.addSlide();
  sectionHeader(s, "BEFORE WE START", "Tableau Public — free, Mac or Windows");
  s.addText("Install it before the session, not during: public.tableau.com", { x: 0.7, y: 2.15, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 18, color: BLUE, bold: true });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 3.0, w: 11.9, h: 1.3, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("One trade-off: Tableau Public saves workbooks to Tableau's public servers, visible to anyone. Fine for today's dataset — worth knowing before you publish something later you'd rather keep private.", { x: 1.0, y: 3.2, w: 11.3, h: 0.95, fontFace: FONT_BODY, fontSize: 14, color: TEXT, valign: "middle" });
}

// 3. Two jobs
{
  let s = pres.addSlide();
  sectionHeader(s, "WHAT ANALYSTS BUILD DASHBOARDS FOR", "Two different jobs");
  const w = 5.75, gap = 0.4, y = 2.15, h = 3.7;
  s.addShape(pres.ShapeType.rect, { x: 0.7, y, w, h, fill: { color: BLUE }, line: { type: "none" } });
  s.addText("EXECUTIVE", { x: 1.0, y: y+0.3, w: w-0.6, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: ORANGE, bold: true, charSpacing: 1.5 });
  s.addText("Looked at for seconds, not minutes. High-level, an obvious \u201cis this good or bad.\u201d Consumed passively.", { x: 1.0, y: y+0.8, w: w-0.6, h: 2.5, fontFace: FONT_BODY, fontSize: 15, color: PAPER, valign: "top" });
  s.addShape(pres.ShapeType.rect, { x: 0.7+w+gap, y, w, h, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("ANALYST", { x: 1.0+w+gap, y: y+0.3, w: w-0.6, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: ORANGE, bold: true, charSpacing: 1.5 });
  s.addText("Worked in actively — filtered, drilled into, cross-referenced. Built to hunt down why a number moved.", { x: 1.0+w+gap, y: y+0.8, w: w-0.6, h: 2.5, fontFace: FONT_BODY, fontSize: 15, color: TEXT, valign: "top" });
  s.addText("A dashboard trying to be both usually fails at both. Know which one you're building.", { x: 0.7, y: 6.15, w: 11.5, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 4. What makes a dashboard good
{
  let s = pres.addSlide();
  sectionHeader(s, "GOOD VS. BUSY", "What separates them");
  const pts = [
    "The main point reads in five seconds, or the format is wrong.",
    "5\u20139 key numbers on screen, not 20.",
    "Every number has something to compare against — a target, a prior period.",
    "The most important number: biggest, top-left.",
    "No 3D charts. Simplest chart that makes the point wins.",
  ];
  let y = 2.15;
  pts.forEach((p) => {
    s.addShape(pres.ShapeType.rect, { x: 0.7, y: y+0.08, w: 0.12, h: 0.12, fill: { color: ORANGE }, line: { type: "none" } });
    s.addText(p, { x: 1.05, y, w: 11.2, h: 0.6, fontFace: FONT_BODY, fontSize: 16, color: TEXT, valign: "top" });
    y += 0.75;
  });
}

// 5. Where to look
{
  let s = pres.addSlide();
  sectionHeader(s, "BEFORE YOU BUILD", "Look at what good already looks like");
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 2.3, w: 5.75, h: 2.9, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("Tableau Public Gallery", { x: 1.0, y: 2.6, w: 5.15, h: 0.5, fontFace: FONT, fontSize: 18, color: BLUE, bold: true });
  s.addText("public.tableau.com/app", { x: 1.0, y: 3.15, w: 5.15, h: 0.4, fontFace: "Courier New", fontSize: 13, color: ORANGE });
  s.addText("Browse by topic, sorted by what's currently featured.", { x: 1.0, y: 3.7, w: 5.15, h: 1.2, fontFace: FONT_BODY, fontSize: 13, color: TEXT, valign: "top" });
  s.addShape(pres.ShapeType.rect, { x: 6.85, y: 2.3, w: 5.75, h: 2.9, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("Makeover Monday", { x: 7.15, y: 2.6, w: 5.15, h: 0.5, fontFace: FONT, fontSize: 18, color: BLUE, bold: true });
  s.addText("makeovermonday.co.uk", { x: 7.15, y: 3.15, w: 5.15, h: 0.4, fontFace: "Courier New", fontSize: 13, color: ORANGE });
  s.addText("A weekly project where people rebuild the same chart better. Five takes on one dataset makes \u201cgood vs. busy\u201d concrete.", { x: 7.15, y: 3.7, w: 5.15, h: 1.4, fontFace: FONT_BODY, fontSize: 13, color: TEXT, valign: "top" });
}

// 6. Orientation
{
  let s = pres.addSlide();
  sectionHeader(s, "ORIENTATION", "Data pane, shelves, marks");
  const panes = [["Data pane", "Dimensions (blue) on top, Measures (green) below"], ["Rows / Columns", "drag fields here to build the chart"], ["Marks card", "color, size, label, detail, tooltip"]];
  const w = 3.7, gap = 0.35;
  let x = 0.7;
  panes.forEach(([t, d], i) => {
    s.addShape(pres.ShapeType.rect, { x, y: 2.2, w, h: 2.6, fill: { color: i === 0 ? BLUE : OFFWHITE }, line: { type: "none" } });
    s.addText(t, { x: x+0.3, y: 2.45, w: w-0.6, h: 0.6, fontFace: FONT, fontSize: 17, color: i === 0 ? PAPER : BLUE, bold: true });
    s.addText(d, { x: x+0.3, y: 3.1, w: w-0.6, h: 1.5, fontFace: FONT_BODY, fontSize: 12.5, color: i === 0 ? "D6E2EA" : TEXT, valign: "top" });
    x += w + gap;
  });
  s.addText("First build, live: Major_category \u2192 Columns, average Median \u2192 Rows. Then a scatter: ShareWomen vs. Median, colored by Major_category.", { x: 0.7, y: 5.2, w: 11.5, h: 1.0, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 7. Guided build
{
  let s = pres.addSlide();
  sectionHeader(s, "GUIDED BUILD \u2014 25 MIN", "Rebuild, combine, filter");
  const items = ["Rebuild both charts from the demo", "Combine them on a new Dashboard", "Add a filter on Major_category, apply it to all sheets", "Your choice: a third visual, ideally your Week 2 column as a calculated field"];
  let y = 2.2;
  items.forEach((t, i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.55, h: 0.55, fontFace: FONT, fontSize: 20, color: ORANGE, bold: true });
    s.addText(t, { x: 1.3, y: y+0.03, w: 10.9, h: 0.55, fontFace: FONT_BODY, fontSize: 16, color: TEXT, valign: "middle" });
    y += 0.85;
  });
  s.addText("Every chart needs a title that states the finding, not the chart type.", { x: 0.7, y: 5.7, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: BLUE, bold: true, italic: true });
}

// 8. Critique + wrap-up
{
  let s = pres.addSlide();
  sectionHeader(s, "THE FIVE-SECOND TEST", "Critique, then look ahead");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.05, w: 11.9, h: 1.1, rectRadius: 0.06, fill: { color: BLUE }, line: { type: "none" } });
  s.addText("What would you understand from this in five seconds, cold?", { x: 1.1, y: 2.05, w: 11.1, h: 1.1, fontFace: FONT_BODY, fontSize: 17, color: PAPER, bold: true, align: "center", valign: "middle" });
  s.addText("Common fixes: unlabeled axes, no clear color meaning, too many charts, a title naming the chart type instead of the finding.", { x: 0.7, y: 3.4, w: 11.3, h: 0.8, fontFace: FONT_BODY, fontSize: 13.5, color: TEXT });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 4.5, w: 11.9, h: 0.02, fill: { color: GREEN } });
  s.addText("Week 4 is yours: same dataset, your own question, Excel and Tableau together, no script.", { x: 0.7, y: 4.85, w: 11, h: 0.7, fontFace: FONT, fontSize: 18, color: BLUE, bold: true });
}

pres.writeFile({ fileName: "week-03-slides.pptx" }).then(() => console.log("done"));
