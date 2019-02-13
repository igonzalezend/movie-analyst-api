pipeline {
    agent any

    stages{
        stage("Cloning repositories"){
            steps{
                //sh 'rm -rf movie-analyst-api'
                //sh 'rm -rf movie-analyst-ui'
                git credentialsId: '17aa64c1-10ca-4275-94d5-32c37f69f261', url: 'https://github.com/igonzalezend/movie-analyst-api'
                git credentialsId: '17aa64c1-10ca-4275-94d5-32c37f69f261', url: 'https://github.com/igonzalezend/movie-analyst-ui'
            }
        }

        /**stage("Preparing Artifacts"){
            
        }**/
    }
}