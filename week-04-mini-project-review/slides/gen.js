const pptxgen = require("pptxgenjs");
let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";

const BLUE = "1C3F60", ORANGE = "D97E3F", GREEN = "5B8A82", PAPER = "FFFFFF", OFFWHITE = "F4F1EC", TEXT = "2A2A2A", MUTED = "6B6B6B";
const FONT = "Georgia", FONT_BODY = "Calibri";

function titleSlide(title, subtitle, tag) {
  let s = pres.addSlide();
  s.background = { color: BLUE };
  s.addText(tag, { x: 0.7, y: 0.6, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: ORANGE, charSpacing: 2, bold: true });
  s.addText(title, { x: 0.7, y: 2.5, w: 11.5, h: 1.8, fontFace: FONT, fontSize: 38, color: PAPER, bold: true, valign: "top" });
  s.addText(subtitle, { x: 0.7, y: 4.05, w: 11, h: 0.9, fontFace: FONT_BODY, fontSize: 17, color: "D6E2EA" });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 2.25, w: 1.4, h: 0.05, fill: { color: ORANGE } });
  return s;
}
function sectionHeader(s, kicker, title) {
  s.background = { color: PAPER };
  s.addText(kicker, { x: 0.7, y: 0.5, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: ORANGE, bold: true, charSpacing: 2 });
  s.addText(title, { x: 0.7, y: 0.85, w: 11.5, h: 0.9, fontFace: FONT, fontSize: 27, color: BLUE, bold: true });
}

// 1. Title (reframe folded into subtitle)
titleSlide("Mini-Project\nShare-Out", "No new content today — Weeks 2 and 3, without a script.", "DATA ANALYTICS BRANCH \u00b7 WEEK 4");

// 2. Four requirements
{
  let s = pres.addSlide();
  sectionHeader(s, "COMING IN", "The four requirements");
  const reqs = [["1", "A clear claim", "a sentence, not just a chart"], ["2", "An engineered column", "computed, not raw"], ["3", "Excel + Tableau", "both, together"], ["4", "A named limitation", "sample size, confound, gap"]];
  const w = 2.75, gap = 0.2;
  let x = 0.7;
  reqs.forEach(([num, t, d]) => {
    s.addShape(pres.ShapeType.rect, { x, y: 2.15, w, h: 3.4, fill: { color: OFFWHITE }, line: { type: "none" } });
    s.addText(num, { x: x+0.25, y: 2.4, w: w-0.5, h: 0.6, fontFace: FONT, fontSize: 24, color: ORANGE, bold: true });
    s.addText(t, { x: x+0.25, y: 3.0, w: w-0.5, h: 0.8, fontFace: FONT_BODY, fontSize: 15, color: BLUE, bold: true, valign: "top" });
    s.addText(d, { x: x+0.25, y: 3.75, w: w-0.5, h: 1.6, fontFace: FONT_BODY, fontSize: 12, color: TEXT, valign: "top" });
    x += w + gap;
  });
}

// 3. Share-out format
{
  let s = pres.addSlide();
  sectionHeader(s, "SHARE-OUT \u2014 30 MIN", "4\u20135 minutes per group");
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 2.15, w: 11.9, h: 1.15, rectRadius: 0.06, fill: { color: BLUE }, line: { type: "none" } });
  s.addText("State the claim in the first 30 seconds. Don't bury it.", { x: 1.1, y: 2.15, w: 11.1, h: 1.15, fontFace: FONT_BODY, fontSize: 17, color: PAPER, bold: true, align: "center", valign: "middle" });
  s.addText("1\u20132 questions per group from the room.", { x: 0.7, y: 3.55, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 15, color: TEXT });
  s.addText("Not a competition. Five or six different approaches to the same dataset is the point.", { x: 0.7, y: 4.15, w: 11, h: 0.6, fontFace: FONT_BODY, fontSize: 14, color: MUTED, italic: true });
}

// 4. Retrospective
{
  let s = pres.addSlide();
  sectionHeader(s, "RETROSPECTIVE \u2014 20 MIN", "Whole branch, in order");
  const prompts = ["What felt hard this cycle?", "What's one thing that clicked?", "What do you want more practice on before SQL?"];
  let y = 2.2;
  prompts.forEach((p, i) => {
    s.addText(String(i+1), { x: 0.7, y, w: 0.6, h: 0.7, fontFace: FONT, fontSize: 26, color: ORANGE, bold: true });
    s.addText(p, { x: 1.5, y: y+0.05, w: 10.5, h: 0.7, fontFace: FONT_BODY, fontSize: 19, color: BLUE, valign: "middle" });
    y += 1.0;
  });
  s.addText("Officers: write these down. Real input, not a formality.", { x: 0.7, y: 5.4, w: 11, h: 0.5, fontFace: FONT_BODY, fontSize: 13, color: MUTED, italic: true });
}

// 5. What's next
{
  let s = pres.addSlide();
  sectionHeader(s, "LOOKING AHEAD", "Month one \u2192 month two");
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 2.15, w: 5.7, h: 3.3, fill: { color: OFFWHITE }, line: { type: "none" } });
  s.addText("MONTH ONE", { x: 1.05, y: 2.4, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 11, color: ORANGE, bold: true, charSpacing: 1.5 });
  s.addText("Comfortable enough with tools to ask a real question and defend it.", { x: 1.05, y: 2.8, w: 5, h: 1.5, fontFace: FONT_BODY, fontSize: 15, color: TEXT, valign: "top" });
  s.addShape(pres.ShapeType.rect, { x: 6.75, y: 2.15, w: 5.85, h: 3.3, fill: { color: BLUE }, line: { type: "none" } });
  s.addText("MONTH TWO", { x: 7.1, y: 2.4, w: 5.2, h: 0.35, fontFace: FONT_BODY, fontSize: 11, color: ORANGE, bold: true, charSpacing: 1.5 });
  s.addText("SQL — same instinct, a different way into the data. The most-requested skill in analyst postings.", { x: 7.1, y: 2.8, w: 5.2, h: 1.7, fontFace: FONT_BODY, fontSize: 15, color: PAPER, valign: "top" });
}

// 6. Close
{
  let s = pres.addSlide();
  s.background = { color: BLUE };
  s.addText("Nice work, cycle one.", { x: 0.7, y: 3.1, w: 11.5, h: 1.2, fontFace: FONT, fontSize: 34, color: PAPER, bold: true });
  s.addShape(pres.ShapeType.rect, { x: 0.7, y: 4.3, w: 1.4, h: 0.05, fill: { color: ORANGE } });
}

pres.writeFile({ fileName: "week-04-slides.pptx" }).then(() => console.log("done"));
