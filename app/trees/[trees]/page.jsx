import path from "path";
import fs from "fs";

import Tree from "@/components/tree/Tree";
import { notFound } from "next/navigation";

export default function TreePage({ params }) {
  const dbPath = path.join(process.cwd(), "data", "names.json");
  const data = fs.readFileSync(dbPath);
  const parsedData = JSON.parse(data);

  const treeData = parsedData.filter((item) => {
    return item.id == params.trees;
  });
  if (treeData.length == 0) {
    notFound();
  }
  return (
    <div>
      <Tree data={treeData[0]} />
    </div>
  );
}
