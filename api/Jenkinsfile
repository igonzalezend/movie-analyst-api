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
            steps{
                dir('/var/lib/jenkins/workspace') {
                        sshPublisher(publishers: [sshPublisherDesc(configName: 'BackEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-api.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                        sh '''
                            ssh ubuntu@10.0.6.189 "tar -xzf movie-analyst-api.tar.gz"
                            ssh ubuntu@10.0.6.189 "sudo chown ubuntu:ubuntu /home/ubuntu/.pm2/rpc.sock /home/ubuntu/.pm2/pub.sock ; pm2 stop all ; pm2 start /home/ubuntu/RampUp_movie-analyst-api/ecosystem.config.js"
                        '''
                }  
            }
        }
    }
}

