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
                    cd movie-analyst-api && npm install
                    cd ../movie-analyst-ui && npm install
                    cd ..
                    tar -czvf movie-analyst-api.tar.gz movie-analyst-api
                    tar -czvf movie-analyst-ui.tar.gz movie-analyst-ui
                '''
            }     
        }

        stage("Deploy"){
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'FrontEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'tar -xvzf movie-analyst-ui.tar.gz ', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-ui.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false), sshPublisherDesc(configName: 'FrontEnd_1D', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'tar -xvzf movie-analyst-ui.tar.gz ', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-ui.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false), sshPublisherDesc(configName: 'BackEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'tar -xvzf movie-analyst-api.tar.gz ', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-api.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])            
            }
        }
    }
}