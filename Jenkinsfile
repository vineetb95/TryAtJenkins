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
                sh 'git branch'
            }
        }
    }
}
