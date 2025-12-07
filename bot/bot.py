import os
import json
import glob
import sys

class DocBot:
    def __init__(self, docs_path):
        self.docs_path = docs_path
        self.knowledge_base = {}
        self.load_docs()

    def load_docs(self):
        print(f"Loading documentation from {self.docs_path}...")
        
        # Load Markdown files
        md_files = glob.glob(os.path.join(self.docs_path, "*.md"))
        for f in md_files:
            with open(f, 'r', encoding='utf-8') as file:
                self.knowledge_base[os.path.basename(f)] = file.read()
                print(f"Loaded {os.path.basename(f)}")

        # Load JSON files
        json_files = glob.glob(os.path.join(self.docs_path, "*.json"))
        for f in json_files:
            with open(f, 'r', encoding='utf-8') as file:
                try:
                    data = json.load(file)
                    self.knowledge_base[os.path.basename(f)] = json.dumps(data, indent=2)
                    print(f"Loaded {os.path.basename(f)}")
                except json.JSONDecodeError:
                    print(f"Error decoding {os.path.basename(f)}")

    def search(self, query):
        print(f"\nSearching for: '{query}'")
        results = []
        for filename, content in self.knowledge_base.items():
            if query.lower() in content.lower():
                # Find the context window
                idx = content.lower().find(query.lower())
                start = max(0, idx - 200)
                end = min(len(content), idx + 200)
                snippet = content[start:end].replace('\n', ' ')
                results.append(f"[{filename}]: ...{snippet}...")
        
        return results

    def chat(self):
        print("\n--- Veridi Documentation Bot ---")
        print("Type 'exit' to quit.")
        while True:
            query = input("\nYou: ")
            if query.lower() in ['exit', 'quit']:
                break
            
            results = self.search(query)
            if results:
                print("\nBot: Found the following context:")
                for res in results:
                    print(res)
            else:
                print("\nBot: I couldn't find any specific matches in the documentation.")

if __name__ == "__main__":
    # Assuming docs are in ../docs relative to this script
    docs_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs")
    
    if not os.path.exists(docs_dir):
        print(f"Error: Docs directory not found at {docs_dir}")
        sys.exit(1)

    bot = DocBot(docs_dir)
    bot.chat()
