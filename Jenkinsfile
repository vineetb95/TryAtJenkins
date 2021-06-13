pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'echo "Add build steps here"'
            }
        }
        stage('Deploy to 3000') { 
            steps {
                sh 'cd /root/TryAtJenkins'
                sh 'git pull origin master'
                sh 'npm install'
                sh 'pm2 restart 0'
            }
        }
    }
}
