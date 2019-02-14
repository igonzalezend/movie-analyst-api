pipeline{
    agent any

    stages
    {
        stage("Build"){
            steps{
                sh '''
                    npm install
                    cd ..
                    tar -czf movie-analyst-api.tar.gz RampUp_movie-analyst-api
                '''
            }
            
        }

        stage("Deploy"){
            stage('Deploy in back 1c'){
                steps{
                    sh 'cd ..'
                    sshPublisher(publishers: [sshPublisherDesc(configName: 'BackEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-api.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                }
            }

            stage('Restart server 1c'){
                steps{
                    sh '''
                        ls
                        ssh ubuntu@10.0.6.189 "sudo chown ubuntu:ubuntu /home/ubuntu/.pm2/rpc.sock /home/ubuntu/.pm2/pub.sock ; pm2 stop all ; pm2 start"
                    '''
                }
            }
        }
    }
}

