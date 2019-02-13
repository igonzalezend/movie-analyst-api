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
                    tar -czvf movie-analyst-api.tar.gz movie-analyst-api
                    tar -czvf movie-analyst-ui.tar.gz movie-analyst-ui
                '''
            }     
        }
    }
}