pipeline {

	environment{
		imageTag = 'igonzalezend/movie-analyst-api' + ":$BUILD_NUMBER"
		credentials = 'dockerhub'
	}

	agent any    

	stages {

		stage('Build') {                         
			steps {                                 
				echo 'Building..'
				script {
					dockerImage = docker.build imageTag
				}             
			}                 
		}
		stage('push') {
			steps {
				echo 'pushing'
				script {
					docker.withRegistry('', credentials){
						dockerImage.push()
					}
				}
			}
		}                
		stage('Deploy') {       
			steps {
				echo 'Deploying....'
				withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'ivdgonzalezco', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
					sh 'chmod +x deployment_script.sh'
					sh './deployment_script.sh $BUILD_NUMBER'
				}                                 
				
				/**script {
					docker.withRegistry('', credentials){
						sh 'docker pull $imageTag'
					}
				}
				sh 'docker rm -f $(docker ps -a -q)'
				sh 'docker run -d -p 8000:8000 $imageTag'
				sh 'docker image prune -f -a'**/                                    					
			}                 
		}        
	} 
} 

