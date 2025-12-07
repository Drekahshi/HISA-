import os
import sys

# Add current directory to path so we can import bot
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from bot import DocBot

def test():
    # Docs are in ../docs
    docs_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs")
    
    if not os.path.exists(docs_dir):
        print(f"Error: Docs directory not found at {docs_dir}")
        return

    print("Initializing Bot...")
    bot = DocBot(docs_dir)
    
    query = "tree"
    print(f"\nTest Search for '{query}':")
    results = bot.search(query)
    
    if results:
        for res in results:
            print(res)
    else:
        print("No results found.")

if __name__ == "__main__":
    test()
