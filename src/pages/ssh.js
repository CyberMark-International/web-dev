const SSH = () => {
    return (
      <div>
        <div className="top_section">
          <h1>Common SSH Commands</h1>
        </div>
        <section id="top">
          <h2>Overview</h2>
          <p>CyberMark websites are hosted on various platforms. The main franchise websites that we work on are hosted on either AWS or Kinsta. The following sections will outline some of the most common used SSH commands. These commands can be used to help fix errors, restart a server, or debug an issue.</p>
        </section>
        <section id="server">
          <h2>Amazon Hosted Accounts</h2>
          <h3>Connecting to AWS</h3>
          <h4>FileZilla</h4>
          <p>To connect to FileZilla, please make sure you have the latest version installed. If not, you can download it <a href="https://filezilla-project.org/download.php?platform=win64" target="_blank" rel="noreferrer">here</a>.</p>
          <p>To ensure the connection can be established, you must add your SSH key to Putty first. The SSH key can be provided to you by your manager. Complete the following steps to add your SSH key to FileZilla.</p>
          <ol>
            <li>Navigate to Edit > Settings</li>
            <li>Using the left side menu, click SFTP</li>
            <li>Click the "Add key file..." button</li>
            <li>Click the provided key. Please note: this key should be moved to your U drive or G drive and not left in a Downloads folder</li>
            <li>Click "Ok" in the bottom left to save changes</li>
          </ol>
          <p>Once you have set up your SSH key, complete the following steps to connect to a site.</p>
          <ol>
            <li>Navigate to File > Site Manager</li>
            <li>Click New Site</li>
            <li>Change protocal to SFTP</li>
            <li>Host - enter the IP of the server the site is on</li>
            <li>Port - leave blank</li>
            <li>Logon Type - Normal</li>
            <li>User - bitnami (lowercase)</li>
            <li>Password - leave blank</li>
          </ol>
          <h4>Putty</h4>
          <p>To connect to Putty, please make sure you have the latest version installed. If not, you can download it <a href="https://www.putty.org/" target="_blank" rel="noreferrer">here</a>.</p>
          <p>To connect to your server and properly enter SSH commands, complete the following steps:</p>
          <ol>
            <li>Host Name - enter the IP of the server you want to conncet to</li>
            <li>Port - 22</li>
            <li>Connection type - SSH</li>
            <li>Saved Sessions - Enter the name of the site/server and status, i.e. Franchise Name - Staging</li>
            <li>Click the save button</li>
            <li>Using the left menu, navigate to Auth, located under Connection > SSH, and click the "Browse" button at the bottom</li>
            <li>Upload your Key file</li>
            <li>Using the left menu, navigate to Data, located under Connection, and enter "bitnami" in the Auto-login username</li>
            <li>Navigate back to "Session" using the left admin menu, click "Save" again. Please note: if you do not click save, your settings will not save.</li>
            <li>Click open to connect to server</li>
          </ol>
          <h3>Wordpress folder</h3>
          <p>Your Wordpress installation can be found in the following folder path: /opt/bitnami/apps/wordpress/htdocs</p>
          <h3>Wordpress Htaccess</h3>
          <p>The AWS Wordpress installation does not use the standard .htaccess file that normal Wordpress sites come with. If you need to add redirects or make changes to the .htaccess file, navigate to the following location: /opt/bitnami/apps/wordpress/conf. Here you will see a file named: <strong>httpd-app.conf</strong>, this is where you can add your 301 redirects. Any settings changed here will require a restart of the server.</p>
          </section>
          <hr/>
          <section id="aws">
            <h3>Apache Error Log</h3>
          <p>The server error log is located in the apache2 folder. This error log will contain all of the PHP warnings and errors the website encounters. In the event the website is not working or you are trying to track down an error, you can navigate to the following file location to view the error: /opt/bitnami/apache2/logs. By right-clicking the error_log file, you can click view to see all current errors.</p>
          <p>After reviewing the errors and completing any fixes needed to prevent future errors, you should clear the log to prevent an inflated file size. The following command can be issued to clear the log.</p>
          <p><strong>Clear the error log</strong></p>
          <code>sudo bash -c 'echo > /opt/bitnami/apache2/logs/error_log'</code>
          <h3>Server Commands</h3>
          <p><strong>Find credentials by connecting to your application through SSH</strong></p>
          <code>sudo cat /home/bitnami/bitnami_credentials</code>
          <p><strong>Obtain the status of a service:</strong></p>
          <code>sudo /opt/bitnami/ctlscript.sh status</code>
          <p><strong>Call it without any service name arguments to start all services</strong></p>
          <code>sudo /opt/bitnami/ctlscript.sh start</code>
          <p><strong>Restart a single service, such as Apache only, by passing the service name as argument</strong></p>
          <code>sudo /opt/bitnami/ctlscript.sh restart apache</code>
          <p><strong>Use this script to stop all services</strong></p>
          <code>sudo /opt/bitnami/ctlscript.sh stop</code>
          <p><strong>Restart all services</strong></p>
          <code>sudo /opt/bitnami/ctlscript.sh restart</code>
          <p><strong>Check server memory:</strong></p>
          <code>df -h</code>
          <h3>Server Security</h3>
          <p><strong>To know if you are being attacked, run the command below:</strong></p>
          <code>cd /opt/bitnami/apache2/logs/</code>
          <code>tail -n 10000 access_log | awk {`'{print $1}'`}| sort| uniq -c| sort -nr| head -n 10</code>
          <p><em>This will show you the number of times that an IP address connected to your Web server.</em></p>
          <p><strong>If you see that some IP addresses have many more connections than others, run the following command (remember to modify ATTACKER_IP with the correct IP):</strong></p>
          <code>cd /opt/bitnami/apache2/logs/</code>
          <code>grep "ATTACKER_IP" access_log</code>
          <p><strong>Server Folder Permissions</strong></p>
          <p>If you find yourself unable to upload files, plugins, or delete items, you may need to update folder permissions. Use the following code to update folder permissions back to the original state. </p>
          <code>sudo chown -R bitnami:daemon /opt/bitnami/apps/wordpress/htdocs</code>
          <code>sudo find /opt/bitnami/apps/wordpress/htdocs -type d -exec chmod 0775 {} \;</code>
          <code>sudo find /opt/bitnami/apps/wordpress/htdocs -type f -exec chmod 0664 {} \;  </code>
          <p><strong>Blocking access to the .git folder</strong></p>
          <p>It is best practice to block the outside world from accessing the .git folder. Update the folder permissions with the following:</p>
          <code>find .git -type d | xargs chmod 755</code>
          <code>find .git/objects -type f | xargs chmod 444</code>
          <code>find .git -type f | grep -v /objects/ | xargs chmod 644 </code>
          <p>To prevent the .git folder from being attacked and deny requests, add the following code to your httpd-conf file located in: /opt/bitnami/apps/wordpress/conf</p>
          <code># Protect git files<br/>
          &lt;IfModule mod_rewrite.c&gt;<br/>
            RewriteEngine On<br/>
            RedirectMatch 404 /\.git<br/>
            # RewriteRule \.git/ -[F]<br/>
            &lt;/IfModule&gt;
          </code>

          <code># Block WordPress xmlrpc.php requests
          &lt;Files xmlrpc.php&gt;<br/>
            Order deny,allow<br/>
            Deny from all<br/>
            Allow from 127.0.0.1<br/>
            &lt;/Files&gt;
          </code>

        </section>
        <hr/>
        <section id="kinsta">
            <h3>Common SSH Kinsta Commands</h3>
            <h4>Directory Commands</h4>
            <p>There is a range of SSH commands that you can use to work with or manipulate the directories (or folders) in your WordPress site.</p>
            <p><strong>pwd - Show Current Directory (Full Path to Where You Are Right Now)</strong></p>
            <pre className="language-bash" tabindex="0"><code>pwd</code></pre> 
            <p>This command will display the full path to where you are in your server right now. If you type this in when you first access your site, it'll tell you which server you are on.</p>
            <p>Use this command after moving further into your folders, and you'll see more information about exactly where you are. This can be useful to check your location, as you don't have the visual representation that you'd get when using a code editor.</p>
            <p><strong>ls - Show Directory Contents (List the Names of Files)</strong></p>
            <pre className="language-bash" tabindex="0"><code>ls</code></pre> 
            <p>This command will display the contents of the current directory.</p>
            <p>You can also use additional parameters to customize or add to the information the <code className="d-inline-block">ls</code> command returns:</p>
            <ul>
              <li><code className="d-inline-block">ls -a</code> displays hidden files.</li>
              <li><code className="d-inline-block">ls -l</code> shows file details for directory contents, for example, permissions, ownership, date, etc.</li>
              <li><code className="d-inline-block">ls -s</code> lists the size of files, in blocks.</li>
              <li><code className="d-inline-block">ls -s -h</code> shows the size in a humanly-readable form.</li>
            </ul>
            <p>Make sure to type a space between the command and any parameters.</p>
            <p><strong>cd - Change Directory</strong></p>
            <pre className="language-bash" tabindex="0"><code>cd</code></pre> 
            <p>This command will let you move to another directory. You can move into subdirectories of the current directory or you can move up or across with the correct parameters.</p>
            <p>The command below takes me from the root directory of my server to the public directory:</p>
            <pre className="language-bash" tabindex="0"><code>cd public</code></pre>
            <p>To move up the directory tree or to go back where you came from, use one of these parameters:</p>
            <ul>
              <li><code className="d-inline-block">cd ..</code> goes to the directory immediately above your current location.</li>
              <li><code className="d-inline-block">cd ../foldername</code> moves you sideways into another folder inside the folder right above you.</li>
              <li><code className="d-inline-block">cd</code> - goes to the previous directory.</li>
              <li><code className="d-inline-block">cd /</code> takes you to the root directory.</li>
            </ul>
            <p><strong>mkdir - Create a New Directory</strong></p>
            <pre className="language-bash" tabindex="0"><code>mkdir</code></pre> 
            <p>This command, you can create a new directory in the current directory.</p>
            <p>So, if you're inside the folder of a plugin and you want to add a directory for stylesheet, you might use this command:</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">mkdir</span> styles</code></pre>
            <p>This will add a new empty directory to the folder you are currently in. If you want to add a directory to a folder lower down in the structure, you type in the structure. So from the wp-content folder, you might type:</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">mkdir</span> /plugins/myplugin/styles</code></pre>
            <p><strong>rmdir - Remove Directory</strong></p>
            <pre className="language-bash" tabindex="0"><code>rmdir</code></pre>
            <p>This command will delete a directory on your server. <strong>Be careful using this as you can't undo it</strong>!</p>
            <p>As with <code className="d-inline-block">mkdir</code>, you can use <code className="d-inline-block">rmdir</code> to remove a directory in your current location:</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">rmdir</span> styles</code></pre>
            <p>Or you can use <code className="d-inline-block">rmdir</code> to remove a folder further down in the structure:</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">rmdir</span> /plugins/myplugin/styles</code></pre>
            <p>You can also use <code className="d-inline-block">rm</code> to remove directories, if you add additional parameters.</p>
            <ul>
              <li><code className="d-inline-block">rm * foldername</code> - delete all the files or content in a directory.</li>
              <li><code className="d-inline-block">rm -r foldername</code> - delete the folder as well as the folders inside it.</li>
            </ul>
            <h3>File or Directory Commands</h3>
            <p>The following commands can be used with either files or folders/directories.</p>
            <p><strong>cp - Copy File or Folder</strong></p>
            <pre className="language-bash" tabindex="0"><code>cp</code></pre>
            <p>This command with both files and folders to copy them to another location. You'll need to specify where you want the file or folder to be copied to.</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">cp</span> filename.extension /dir/</code></pre>
            <p>This specifies the name of the file to be copied (including its extension) and the location it will be copied to.</p>
            <p>If you want to rename the file (i.e. the new version has a different name from the original), then you can also specify the new file name.</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">cp</span> filename.extension /dir/filename.extension</code></pre>
            <p>This command has a number of parameters you can use:</p>
              <ul>
              <li><code className="d-inline-block">cp -r</code> copies all the contents of a folder.</li>
              <li><code className="d-inline-block">cp -f</code> deletes the destination file if there is already another file with the same name, and overrides it with the new one.</li>
              <li><code className="d-inline-block">cp -i</code> gives you a warning message before copying.</li>
              <li><code className="d-inline-block">cp -u</code> overwrites the file in the destination folder only if the files have different content.</li>
              <li><code className="d-inline-block">cp -n</code> checks if the file already exists first and if so, it won't copy. It doesn't overwrite the file.</li>
              <li><code className="d-inline-block">cp -a</code> archives the original file.</li>
            </ul>
            <p><strong>mv - Move File or Folder</strong></p>
            <p>As well as copying files and folders, you can also move them. To do this, use the <code className="d-inline-block">mv</code> command.</p>
            <p>As with <code className="d-inline-block">cp</code>, you can either move a file or folder and keep the same name or move it and rename it.</p>
            <ul>
              <li><code className="d-inline-block">mv filename.extension /dir/</code> moves a file and keeps the same name.</li>
              <li><code className="d-inline-block">mv filename.extension /dir/filename1.extension</code> moves and renames the file.</li>
              <li><code className="d-inline-block">mv filename/ ..</code> moves a file one folder up.</li>
            </ul>
            <p><strong>zip - Compress File or Folder</strong></p>
            <p>Another command you can use with folders or files is <pre className="language-bash" tabindex="0"><code>zip</code></pre> which you can implement to compress a folder and its contents. You need to include the name of the file/folder that will be compressed as a zip file. You can use it with parameters that will specify whether you want to delete the original folder or not.</p>
            <ul>
              <li><code className="d-inline-block">zip -r filename.zip foldername</code> compresses a folder but doesn't delete it.</li>
              <li><code className="d-inline-block">zip -m filename.zip foldername</code> compresses a folder and deletes it, leaving you with just the zipped version of the folder.</li>
              <li><code className="d-inline-block">zip -d filename.zip foldername</code> deletes a file from the existing zip archive you specify.</li>
              <li><code className="d-inline-block">zip -u filename.zip foldername</code> updates a file within an existing zip archive: useful if you've updated the original file and don't want to delete the zip file and create a new one.</li>
            </ul>

            <p>When you then list out the contents of the folder, you will see the zip file and the original folder if you used <code className="d-inline-block">zip -r</code>, but just the new zip file if you used <code className="d-inline-block">zip -m</code>.</p>

            <p><strong>unzip - Decompress a Folder</strong></p>
            <p>The <code className="d-inline-block">unzip</code> command will decompress a zip file in your directory and extract its contents to create the folder or files it was originally compressed from:</p>
            <pre className="language-bash" tabindex="0"><code>unzip twentyseventeen.zip</code></pre>
            <p>Don't use this if you didn't delete the original folder when zipping it. It won't overwrite the original folder. Instead, use <code className="d-inline-block">zip -m</code> to delete the original folder when zipping it, or use <code className="d-inline-block">rm</code> to delete it before unzipping the zip file.</p>
            <p>You can also add parameters to unzip to customize its use:</p>
            <ul>
            <li><code className="d-inline-block">unzip filename.zip -x excludedfile.zip</code> will exclude a file and prevent it from being unzipped with the rest.</li>
            <li><code className="d-inline-block">unzip filename1.zip filename2.zip filename3.zip</code> will unzip multiple files. You can use this with as many zip files as you want, and it's a lot quicker than doing this in an FTP client.</li>
            </ul>
           
            <h3>File Commands</h3>
            <p>Below is a list of the most common SSH commands specifically for use with files.</p>
            <p><strong>touch - Create a New File</strong></p>
            <p>To create a new empty file on your server, use the <code className="d-inline-block">touch</code> command:</p>
            <pre className="language-bash" tabindex="0"><code className="language-bash"><span className="token function">touch</span> style.css</code></pre>
            <p>You can only create a file in the current directory, so you'sll have to navigate to it before using the <code className="d-inline-block">touch</code> command.</p>
            <p><strong>cat - Show File Contents</strong></p>
            <p>To display the contents of a file, use <code className="d-inline-block">cat</code>.</p>
            <p>This will display the full contents of any file within the Terminal or PuTTY.</p>
          </section>
      </div>
    );
  };
    
  export default SSH;