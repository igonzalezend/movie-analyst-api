pipeline {
    agent any

    stages{
        stage("Clone"){
            steps{
                sh '''
                    rm -rf movie-analyst-api
                    rm -rf movie-analyst-ui
                    git clone https://github.com/igonzalezend/movie-analyst-api
                    git clone https://github.com/igonzalezend/movie-analyst-ui
                '''
            }
        }

        /**stage("Build"){
            
        }**/
    }
}