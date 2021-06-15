pipeline {
    agent any
    stages {
  //       stage('Build') { 
  //           steps {
  //               sh 'echo "Add build steps here"'
  //               step([$class: 'AWSCodeDeployPublisher', applicationName: 'Jenkins', awsAccessKey: 'AKIA5JJN2Z2EL43ZEBBC', awsSecretKey: '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', credentials: 'awsAccessKey', deploymentConfig: 'CodeDeployDefault.AllAtOnce', deploymentGroupAppspec: false, deploymentGroupName: 'development', deploymentMethod: 'deploy', excludes: '', iamRoleArn: '', includes: '**', pollingFreqSec: 15, pollingTimeoutSec: 300, proxyHost: '', proxyPort: 0, region: 'ap-south-1', s3bucket: 's3appbucketforjenkins', s3prefix: '', subdirectory: '', versionFileName: '', waitForCompletion: true])
  //           }
  //       }
  // //       stage('User input') {
  // //       	input {
		// // 		message 'Is dev env OK?'
		// // 		ok 'OK'
		// // 		parameters {
		// // 			booleanParam 'looksGood'
		// // 		}
		// // 	}
		// // 	steps{
		// // 		echo "ans ${looksGood}"
		// // 	}

		// // }
		// stage('Deploy to production') { 
		// 	input {
		// 		message 'Do you want to proceed ??'
		// 	}
  //           steps {
  //               sh 'echo "Add build steps here"'
  //               step([$class: 'AWSCodeDeployPublisher', applicationName: 'Jenkins', awsAccessKey: 'AKIA5JJN2Z2EL43ZEBBC', awsSecretKey: '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', credentials: 'awsAccessKey', deploymentConfig: 'CodeDeployDefault.AllAtOnce', deploymentGroupAppspec: false, deploymentGroupName: 'production', deploymentMethod: 'deploy', excludes: '', iamRoleArn: '', includes: '**', pollingFreqSec: 15, pollingTimeoutSec: 300, proxyHost: '', proxyPort: 0, region: 'ap-south-1', s3bucket: 's3appbucketforjenkins', s3prefix: '', subdirectory: '', versionFileName: '', waitForCompletion: true])
  //           }
  //       }
        stage("Commit changes back to production repo"){
            steps{
                // sh('''
                //     git checkout -B $TARGET_BRANCH
                //     git config user.name 'my-ci-user'
                //     git config user.email 'my-ci-user@users.noreply.github.example.com'
                //     git add . && git commit -am "[Jenkins CI] Add build file"
                // ''')
                sh 'git checkout dev'
                sh 'git checkout master'
                sh 'git merge dev'
                withCredentials([usernamePassword(credentialsId: '3abcc784-22bb-4e05-b6a8-b230ae6fbbf9', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@<REPO>')
                }


            }
        }
    }
}
