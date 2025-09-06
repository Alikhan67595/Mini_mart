import os
import time
import subprocess
from datetime import datetime

def run_git_command(command):
    result = subprocess.run(command, shell=True, text=True, capture_output=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(f"Success: {result.stdout}")

def update_jsx(filename, commit_count):
    # Current time generate karo
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # JSX file overwrite karo (sirf ek div return hoga)
    jsx_content = f"""
import React from 'react';

const Extra = () => {{
  return (
    <div>
      Commit #{commit_count} - Time: {current_time}
    </div>
  );
}}

export default Extra;
"""
    with open(filename, 'w', encoding="utf-8") as f:
        f.write(jsx_content)

def git_automation(filename):
    commit_count = 0
    while True:
        commit_count += 1
        update_jsx(filename, commit_count)
        print(f"Updated {filename} with commit #{commit_count}")

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
        filename = "src/extra.jsx"  # JSX file ka path
        if not os.path.exists(filename):
            update_jsx(filename, 0)  # Initial file create
            print(f"Created {filename}")
        
        print("Starting Git automation with JSX updates...")
        git_automation(filename)
