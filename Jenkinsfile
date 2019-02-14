/*pipeline {
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
                    cd movie-analyst-api && npm install
                    cd ../movie-analyst-ui && npm install
                    cd ..
                    tar -czf movie-analyst-api.tar.gz movie-analyst-api
                    tar -czf movie-analyst-ui.tar.gz movie-analyst-ui
                '''
            }     
        }

        stage("Deploy"){
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'FrontEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''pm2 stop all
rm -rf movie-analyst-ui
tar -xzf movie-analyst-ui.tar.gz
cd movie-analyst-ui 
pm2 start''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-ui.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false), sshPublisherDesc(configName: 'FrontEnd_1D', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''pm2 stop all
rm -rf movie-analyst-ui
tar -xzf movie-analyst-ui.tar.gz
cd movie-analyst-ui 
pm2 start ''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-ui.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false), sshPublisherDesc(configName: 'BackEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''pm2 stop all
rm -rf movie-analyst-api
tar -xzf movie-analyst-api.tar.gz 
cd movie-analyst-api 
pm2 start''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-api.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])        
            }
        }
    }
}*/

pipeline{
    agent any

    stages
    {
        stage("Build"){
            steps{
                sh '''
                    cd ..
                    tar -czf movie-analyst-api.tar.gz RampUp_movie-analyst-api
                    ls
                '''
            }
            
        }
    }
}