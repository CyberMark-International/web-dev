import git1 from '../img/git1.png';
import git2 from '../img/git2.png';
import git3 from '../img/git3.png';
import git4 from '../img/git4.png';
import git5 from '../img/git5.png';
import git6 from '../img/git6.png';
import git7 from '../img/git7.png';
const Github = () => {
    return (
      <div>
        <div className="top_section" id="top">
          <h1>Github Implementation Overview</h1>
        </div>
        <section id="install">
          <h2>Installation</h2>
          <ol>
            <li>Download git on your computer - <a href="https://gitforwindows.org/" rel="noreferrer" target="_blank">https://gitforwindows.org/</a> </li>
            <li>Run the install</li> 
            <li>Download WAMP to your computer - <a href="https://sourceforge.net/projects/wampserver/files/latest/download" rel="noreferrer" target="_blank">https://sourceforge.net/projects/wampserver/files/latest/download</a> </li>
            <li>Run the install and make sure you install it into an external drive </li>
            <li>Navigate to <a href="https://github.com/" rel="noreferrer" target="_blank">https://github.com/</a> and sign up for Github using your CyberMark email address. You will be asked to confirm your account via email. </li>
            <li>Once you are signed up, notify your manager to add you to the organization using your email </li>
          </ol>
        </section>
        <section id="setup">
          <h2>Set Up</h2>
          <ol>
            <li>Navigate to Start > WAMP. WAMP will open and start running in the lower right corner. If the WAMP logo is green then everything is running. </li>

            <li>Navigate to your external drive > wamp64 > www </li>

            <li>Right click and click “Git Bash Here” </li>

            <li>A new window will open similar to your terminal window </li>

            <li>In your web browser, navigate to your CyberMark GitHub Account </li>

            <li>Locate the project you are working on here: <a href="https://github.com/CyberMark-International" rel="noreferrer" target="_blank">https://github.com/CyberMark-International</a> </li>

            <li>Once you see the repository your working on, click to enter the repository </li>

            <li>In the upper right of the page you will see this button, click it <br/><img src={git1} alt="" width="" height="" /></li>
            <li>On the new window click the clipboard to copy the repository link <br/><img src={git2} alt="" width="" height="" /></li>
            <li>Navigate back to your Git Bash window with the terminal<br/>
              Enter the following command:<br/>
              <code>git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY</code>
              </li>
              <li>Your repository will begin to download to your C drive and create a new folder with your files within. You should now see in <br/><code>C > wamp64 > www > REPOSITORYNAME</code>
              This is your active local directory to work from. All work done on these files is what you will use to commit changes to the repository</li>
              <li>Go to a browser and enter http://localhost/phpmyadmin to access the phpmyadmin interface for WAMP</li>
              <li>Enter the username 'root' and leave everything else empty. Click Go<br/><img src={git3} alt="" width="" height="" /></li>
              <li>You will need to create the database for your local install. Click the new button on the left side<br/><img src={git4} alt="" width="" height="" /></li>
              <li>Name your database and set it to utf8mb4_unicode_ci<br/><img src={git5} alt="" width="" height="" /></li>
              <li>Once it is created you will want to import the DB downloaded from the current staging install (ask your manager if you need help getting that DB export).</li> 
              <li>Click the import button on the top of the screen<br/><img src={git6} alt="" width="" height="" /></li>
              <li>Click the import button, upload the file, then click go<br/><img src={git7} alt="" width="" height="" /></li>
              <li>Once you have imported the DB you will need to update the following tables with <br/><pre className="language-bash" tabindex="0">http://localhost/YOURFOLDERNAME/<br/>
              _options<br/>
              _sitemeta</pre></li>
              <li>Once you have imported the DB you will need to update the following tables with <br/><pre className="language-bash" tabindex="0">http://localhost/YOURFOLDERNAME/<br/>
              
              Domain: localhost (NO HTTP://)<br/>
              Path: /foldername/<br/>
              _site<br/>
              _blogs</pre></li>
          </ol>
        </section>
        <section id="development">
          <h2>Development Using GIT</h2>
          <p>All developers should follow the guidelines that have been decided by the team as a whole for the gitflow. `master` is the base branch that usually represents the code that is live (except for a few minutes while deploys are happening). All development should branch off of here. `master` should never have any commands run on it that erase history, particularly rebases, as it can lead to irreversible loss of code.</p>
          <p><strong>Before doing any work on the website, you should do a 'git pull' to pull any changes recently completed on the repository. This will bring your local machine up to date.</strong></p>
          <p>To do a rebase, complete the following steps before any work or new branches are created:</p>
          <pre className="language-bash" tabindex="0"><code>git checkout master<br/>
          git fetch --all --prune && git rebase</code></pre>
          <p>Once the latest changes from `master` are available on the developer's local machine, you are ready to begin work on your feature branch.</p>
          <h3>Creating a new feature branch</h3>
          <p>You will create a new branch from `master` that is named after the feature you are trying to deploy. For example, if we want to add an about us page: </p>
          <code>git checkout -b create-about-us-page</code>
          <p>From here you make changes and add commits for each change made. Commits should generally be small and only encompass one change. For example:</p>
          <p>Developer creates a new html file for the about us page</p>
          <pre className="language-bash" tabindex="0"><code>git add about.html<br/>(you can also do 'git add .' but you should do 'git status' first to make sure you are not adding files you didn’t attend.) <br/>
          git commit</code></pre>
          
          <p>The commit message would look something like:</p>
          <pre className="language-bash" tabindex="0"><code>Add about us html page <br/>This is the initial page that will be used to describe the company's mission </code></pre>
          <p>Developer adds photos of the team with biographies to the about us page</p>
          <pre className="language-bash" tabindex="0"><code>git add assets/images/team/* about.html <br/>git commit</code></pre>
          <p>The commit message would look something like:</p>
          <pre className="language-bash" tabindex="0">Add team biographies to the about us page<br/>Biographies were added for each team member in the company<br/>Photos were included of each team member<br/>Biographies were written by John Smith</pre>
          <p>Once all the code changes are done and you're happy with your feature/fix, you push your changes upstream.</p>
          <pre className="language-bash" tabindex="0"><code>git push origin create-about-us-page</code></pre>
          <p><strong>Once you have pushed your branch to the repository. Your changes MUST BE APPROVED by another developer. Do not merge your own changes ever. Another developer will merge your pull request no later than the end of that business day.</strong></p>
          <p>From there you can open a pull request using the github interface. If someone makes suggestions, create a new commit detailing what was done to correct the suggestion. Once it is approved, if the branch is mergeable, click the green button to merge the branch back into `master`. If it isn't, merge `master` into your branch, and after all the conflicts are resolved, merge your branch into `master.`</p>
          <p>Then deploy to staging to test how it deploys.</p>
        </section>
        <section id="deploy">
          <h2>Deployment</h2>
          <p>Deploys should be done to staging, reviewed, and then sent to production.</p>
          <ol>
            <li>Staging will always deploy whatever code is on `master`</li>
            <li>Production will always deploy whatever code is on `staging`</li>
            <li>A basic flow with one revision would look like this:
              <ul>
                <li>Pull request is opened from a new feature branch</li>
                <li>Feature branch is merged into master</li>
                <li>Master is deployed to staging</li>
                <li>Client reviews staging and asks for a revision</li>
                <li>Developer pulls latest changes from master to their local machine, makes a new feature branch for the clients revisions, and then pushes the new branch (opening a new pull request)</li>
                <li>The pull request is reviewed and merged into master again</li>
                <li>Master is deployed to staging again for review</li>
                <li>Client reviews staging and approves</li>
                <li>Staging is deployed to production</li>
              </ul>
            </li>
          </ol>
        </section>
        <section id="branches">
          <h2>CyberMark Branch Overview</h2>
          <p>There are three main branches that should always exist. Development should be done on branches that branch from `master`</p>
          <ul>
            <li>`master` is the main branch that all development for new features and fixes should branch off of. Once the new branch is submitted for review and approved. It should be merged back into `master`. The history in the master branch should always be preserved (no force pushes or hard resets).</li>
            <li>`staging` is the branch used by the staging server at all times.</li>
            <li>`production` is the branch used by the production server at all times.</li>
          </ul>
          <p>Note: You can easily compare to see what code is staged to be deployed by doing a `git diff` between the two branches. For example <code className="d-inline-block">git diff master staging</code></p>

        </section>
        <section id="git_commands">
          <h2>Command GIT Commands</h2>
          <p><strong>Basic git commands and what they do</strong></p>
          <p>Git has a good manual. If you want to become an expert in git, you can access their docs from the command line by doing <code className='d-inline-block'>`git <em>command</em> --help`</code>. For example, if I wanted to learn more about commiting I would do <code className='d-inline-block'>`git commit --help`</code></p>
          <p><strong>Commands and meanings</strong></p>
            <pre className="language-bash" tabindex="0"><code>git fetch</code></pre>
            <p>This command fetches the code from the remote repository (github) but doesn't update anything manually</p>
            <pre className="language-bash" tabindex="0"><code>git merge</code></pre>
            <p>This command merges changes from another branch to your active branch</p>
            <pre className="language-bash" tabindex="0"><code>git pull</code></pre>
            <p>This command runs a git fetch and then a git merge immediately after. You normally run it to get the latest changes from the git remote repository to your local machine</p>
            <pre className="language-bash" tabindex="0"><code>git push</code></pre>
            <p>This command pushes your local changes to the remote repository</p>
            <pre className="language-bash" tabindex="0"><code>git checkout</code></pre>
            <p>This command moves to a new branch</p>
            <pre className="language-bash" tabindex="0"><code>git checkout -b 'branch_name' </code></pre>
            <p>This creates a new branch</p>
            <pre className="language-bash" tabindex="0"><code>git branch -D 'branch_name' </code></pre>
            <p>This deletes a branch</p>
            <pre className="language-bash" tabindex="0"><code>git commit</code></pre>
            <p>This creates a new commit from files that are staged</p>
            <pre className="language-bash" tabindex="0"><code>git add 'file_list'</code></pre>
            <p>This stages files to be committed</p>
            <p><strong>Understanding code:</strong></p>
            <pre className="language-bash" tabindex="0"><code>git status</code></pre>
            <p>This command shows you what is staged, what is not staged, and the branch you are on</p>
            <pre className="language-bash" tabindex="0"><code>git branch</code></pre>
            <p>This command shows you what branch you are on, and other branches that are available to checkout</p>
            <pre className="language-bash" tabindex="0"><code>git diff</code></pre>
            <p>This commands shows you the difference between two points in the code base. If nothing extra is passed to this command (i.e. git diff), then it will show you what has been unstaged. If two branches are passed as arguments, it will show the difference between the two branches (i.e. git diff master staging)</p>
            <pre className="language-bash" tabindex="0"><code>git log</code></pre>
            <p>This command shows you a history of commits</p>
            <pre className="language-bash" tabindex="0"><code>git blame 'filename'</code></pre>
            <p>This command opens up the git co file and shows you line by line who edited it</p>
            <p>Commands to avoid until you get the basics down</p>
            <pre className="language-bash" tabindex="0"><code>git rebase</code></pre>
            <p>This command rewrites your git history. Its a useful tool once you get the basics down to present your code in a better way so other users can understand what you are doing</p>
            <pre className="language-bash" tabindex="0"><code>git revert</code></pre>
            <p>This command requires you to look into logs and understand what is going to be reverted<br/>
            Most reverts can just be done by manually updating the code in your editor and then pushing a new commit<br/>
            Add a note to the commit that it is undoing code so you can find it later in the logs if need be</p>
            <p><strong>Configurating editor for git commits</strong></p>
            <pre className="language-bash" tabindex="0"><code>git config --global core.editor "nano" </code></pre>
        </section>
      </div>
    );
  };
    
  export default Github;