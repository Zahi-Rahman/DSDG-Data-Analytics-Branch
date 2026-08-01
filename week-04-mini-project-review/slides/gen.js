const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

const INK = "1B3A34", AMBER = "D97E3F", SAGE = "5B8A82", PAPER = "FFFFFF", TEXT = "2A2A2A", MUTED = "6B6B6B";
const FONT = "Georgia", FONT_BODY = "Calibri";

function titleSlide(title, subtitle, tag) {
  let s = pres.addSlide();
  s.background = { color: INK };
  s.addText(tag, { x: 0.7, y: 0.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: AMBER, charSpacing: 2, bold: true });
  s.addText(title, { x: 0.7, y: 2.6, w: 11.5, h: 1.8, fontFace: FONT, fontSize: 38, color: PAPER, bold: true, valign: "top" });
  s.addText(subtitle, { x: 0.7, y: 4.15, w: 11, h: 0.8, fontFace: FONT_BODY, fontSize: 18, color: "D8E4E0" });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 2.35, w: 1.4, h: 0.05, fill: { color: AMBER } });
  return s;
}
function sectionHeader(s, kicker, title) {
  s.background = { color: PAPER };
  s.addText(kicker, { x: 0.7, y: 0.5, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: AMBER, bold: true, charSpacing: 2 });
  s.addText(title, { x: 0.7, y: 0.85, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 27, color: INK, bold: true });
}

// 1. Title
titleSlide("Mini-Project\nShare-Out", "DSDG Data Analytics — Week 4 · Cycle 1 Review", "DATA ANALYTICS BRANCH");

// 2. Reframe
{
  let s = pres.addSlide();
  sectionHeader(s, "TODAY", "No new content — this is the payoff");
  s.addText("Everything from Weeks 2 and 3, now without a script.", { x: 0.7, y: 2.3, w: 11, h: 1.0, fontFace: FONT, fontSize: 24, color: INK, bold: true });
  const items = ["Your own question", "Your own engineered column", "Your own Excel analysis + Power BI dashboard"];
  let y = 3.6;
  items.forEach((t) => {
    s.addText("•  " + t, { x: 0.7, y, w: 10.8, h: 0.5, fontFace: FONT_BODY, fontSize: 17, color: TEXT });
    y += 0.55;
  });
}

// 3. What you should have coming in
{
  let s = pres.addSlide();
  sectionHeader(s, "COMING IN", "The four requirements");
  const reqs = [
    ["1", "A clear claim", "stated as a sentence, not just a chart"],
    ["2", "An engineered column", "something you computed, not a raw column"],
    ["3", "Excel + Power BI", "the analysis and the dashboard, both"],
    ["4", "A named limitation", "small sample, confound, missing variable"],
  ];
  const w = 2.75, gap = 0.2;
  let x = 0.7;
  reqs.forEach(([num, t, d]) => {
    s.addShape(pres.ShapeType.rect, { x, y: 2.15, w, h: 3.8, fill: { color: "F4F1EC" }, line: { type: "none" } });
    s.addText(num, { x: x+0.25, y: 2.4, w: w-0.5, h: 0.6, fontFace: FONT, fontSize: 26, color: AMBER, bold: true });
    s.addText(t, { x: x+0.25, y: 3.05, w: w-0.5, h: 0.9, fontFace: FONT_BODY, fontSize: 15, color: INK, bold: true, valign: "top" });
    s.addText(d, { x: x+0.25, y: 3.85, w: w-0.5, h: 1.9, fontFace: FONT_BODY, fontSize: 12, color: TEXT, valign: "top" });
    x += w + gap;
  });
}

// 4. Share-out format
{
  let s = pres.addSlide();
  sectionHeader(s, "SHARE-OUT — 30 MIN", "4-5 minutes per group");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.2, w: 11.9, h: 1.2, rectRadius: 0.06, fill: { color: INK }, line: { type: "none" } });
  s.addText("\u201cHere's what we found, and here's the one number that convinced us.\u201d", { x: 1.1, y: 2.2, w: 11.1, h: 1.2, fontFace: FONT_BODY, fontSize: 17, color: PAPER, bold: true, align: "center", valign: "middle" });
  s.addText("State the claim in the first 30 seconds. Don't bury it at the end.", { x: 0.7, y: 3.65, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 14, color: TEXT });
  s.addText("1–2 questions per group from the room. This is not a competition — 5–6 different approaches to the same dataset is the whole point.", { x: 0.7, y: 4.25, w: 11, h: 0.9, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 5. Retrospective format
{
  let s = pres.addSlide();
  sectionHeader(s, "RETROSPECTIVE — 20 MIN", "Whole-branch discussion, in order");
  const prompts = ["What felt hard this cycle?", "What's one thing that clicked?", "What do you want more practice on before SQL?"];
  let y = 2.3;
  prompts.forEach((p, i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.6, h: 0.7, fontFace: FONT, fontSize: 26, color: AMBER, bold: true });
    s.addText(p, { x: 1.5, y: y+0.05, w: 10.5, h: 0.7, fontFace: FONT_BODY, fontSize: 19, color: INK, valign: "middle" });
    y += 1.0;
  });
  s.addText("Officers: write these down. Real input for pacing the SQL block — not a formality.", { x: 0.7, y: 5.5, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 13, color: MUTED, italic: true });
}

// 6. What's next
{
  let s = pres.addSlide();
  sectionHeader(s, "LOOKING AHEAD", "Month one → Month two");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.2, w: 5.7, h: 3.5, rectRadius: 0.06, fill: { color: "F4F1EC" }, line: { type: "none" } });
  s.addText("MONTH ONE", { x: 1.05, y: 2.45, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 11, color: AMBER, bold: true, charSpacing: 1.5 });
  s.addText("Comfortable enough with tools to ask a real question and defend it.", { x: 1.05, y: 2.85, w: 5, h: 1.5, fontFace: FONT_BODY, fontSize: 15, color: TEXT, valign: "top" });
  s.addShape(pres.ShapeType.roundRect, { x: 6.75, y: 2.2, w: 5.85, h: 3.5, rectRadius: 0.06, fill: { color: INK }, line: { type: "none" } });
  s.addText("MONTH TWO", { x: 7.1, y: 2.45, w: 5.2, h: 0.35, fontFace: FONT_BODY, fontSize: 11, color: AMBER, bold: true, charSpacing: 1.5 });
  s.addText("SQL — same instinct, a different way into the data. The single most-requested skill in analyst postings.", { x: 7.1, y: 2.85, w: 5.2, h: 1.7, fontFace: FONT_BODY, fontSize: 15, color: PAPER, valign: "top" });
}

// 7. Thank you / closing
{
  let s = pres.addSlide();
  s.background = { color: INK };
  s.addText("Nice work, cycle one.", { x: 0.7, y: 3.0, w: 11.5, h: 1.2, fontFace: FONT, fontSize: 36, color: PAPER, bold: true });
  s.addText("DSDG DATA ANALYTICS", { x: 0.7, y: 6.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 11, color: AMBER, charSpacing: 2, bold: true });
}

pres.writeFile({ fileName: "week-04-slides.pptx" }).then(() => console.log("done"));
