pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'echo "Add build steps here"'
            }
        }
        stage("Deploy to 3000"){
            steps {
                script{
                    def remote = [:]
                    remote.name = "ec2-user"
                    remote.host = "ec2-3-129-64-170.us-east-2.compute.amazonaws.com"
                    remote.allowAnyHosts = true
                    withCredentials([sshUserPrivateKey(credentialsId: 'dc51de26-3370-4d54-a86f-659d0ba2005b', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'ec2-user')]) {
                        remote.user = 'ec2-user'
                        remote.identityFile = identity
                        sshCommand remote: remote, command: 'sh /root/TryAtJenkins/scripts/deploy3000.sh'
                    }
                }
            }
        }
    }
}
