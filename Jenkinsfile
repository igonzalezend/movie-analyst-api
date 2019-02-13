pipeline {
    agent any

    stages{
        stage("Clone"){
            steps{
                sh '''
                    rm -rf movie-analyst-api movie-analyst-ui
                    git clone https://github.com/igonzalezend/movie-analyst-api
                    git clone https://github.com/igonzalezend/movie-analyst-ui
                '''
            }
        }

        stage("Build"){
            steps{
                sh '''
                    zip -r movie-analyst-api.zip movie-analyst-api
                    zip -r movie-analyst-ui.zip movie-analyst-ui
                '''
            }     
        }
    }
}