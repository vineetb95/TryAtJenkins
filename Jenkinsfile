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
//                 sh 'cd /root/TryAtJenkins/'
//                 sh 'git pull origin master'
                sh 'ssh -tt -i "sampleEC2Jenkins.pem" StrictHostKeyChecking=no ec2-user@ec2-3-129-64-170.us-east-2.compute.amazonaws.com'
                sh 'ls /root/TryAtJenkins'
            }
        }
    }
}
