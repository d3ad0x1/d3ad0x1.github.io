export default function extractHeadings(markdown) {
  const lines = markdown.split("\n");

  return lines
    .filter((line) => line.startsWith("## "))
    .map((line) => ({
      text: line.replace("## ", ""),
      id: line
        .replace("## ", "")
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-"),
    }));
}