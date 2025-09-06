import os
import time
import subprocess
from datetime import datetime
import random
import string

def run_git_command(command):
    result = subprocess.run(command, shell=True, text=True, capture_output=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(f"Success: {result.stdout}")

def make_changes(filename, commit_count):
    # Random text aur commit count ke sath change
    random_text = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # File mein naye changes likhna with commit count
    with open(filename, 'a') as f:
        f.write(f"Change #{commit_count} at {current_time}: {random_text}\n")

def git_automation(filename):
    commit_count = 0  # Commit counter
    while True:
        commit_count += 1  # Har loop mein count badhao
        # File mein changes karo with commit count
        make_changes(filename, commit_count)
        print(f"Made changes to {filename} for commit #{commit_count}")
        
        # Git commands
        run_git_command("git add .")
        run_git_command(f'git commit -m "auto update: {filename} at {datetime.now()} - Commit #{commit_count}"')
        run_git_command("git push")
        print(f"Pushed {filename} to GitHub! Total commits: {commit_count}")
        
        time.sleep(60)  # 1 minute wait

if __name__ == "__main__":
    if not os.path.isdir(".git"):
        print("Error: This is not a Git repository. Please initialize one with 'git init'.")
    else:
        filename = "auto_changes.txt"
        if not os.path.exists(filename):
            with open(filename, 'w') as f:
                f.write("Initial content\n")
            print(f"Created {filename}")
        
        print("Starting Git automation with auto changes...")
        git_automation(filename)