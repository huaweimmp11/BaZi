import re, sys
with open(r'C:\Users\slh18\Desktop\八字基础.lake', encoding='utf-8') as f:
    html = f.read()

callouts = re.findall(r'<blockquote[^>]*>.*?</blockquote>', html, re.DOTALL)
print(f"Callout blocks: {len(callouts)}")
for i, c in enumerate(callouts[:3]):
    text = re.sub(r'<[^>]+>', '', c).strip()[:80]
    print(f"  [{i}] {text}")

tables = re.findall(r'<table[^>]*>.*?</table>', html, re.DOTALL)
print(f"\nTables: {len(tables)}")

# 看 highlight块（带背景色样式）
highlights = re.findall(r'<div[^>]*data-lake-type[^>]*>.*?</div>', html, re.DOTALL)
print(f"\nHighlight divs: {len(highlights)}")
for i, h in enumerate(highlights[:5]):
    text = re.sub(r'<[^>]+>', '', h).strip()[:100]
    print(f"  [{i}] {text}")
