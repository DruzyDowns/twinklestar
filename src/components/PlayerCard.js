import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import tachyons from 'tachyons';
import Heart from './Heart';
import Str from './Str';
import End from './End';
import Agi from './Agi';
import Cha from './Cha';
import Aur from './Aur';
import Tho from './Tho';
import Twinklestar from './Twinklestar';
import Twinklegram from './Twinklegram';


export const GET_PLAYERS = gql`
  query GetPlayers {
    players {
      id
      player_name
      character_name
      class
      str
      end
      agi
      cha
      aur
      tho
      life
    }
  }
`;

export default () => (
    <Query query={GET_PLAYERS}>
        {({ loading, data }) => !loading && (
            
            <div className="card-grid pa3">
                    {data.players.map(player => (
                        <div className="player-card flex flex-column justify-between ba br3 border-main pa3">
                            <div className="flex">
                                
                                <div className="mister bb bw1 border-main w-100">
                                    <p className="f1 ttc tracked ma0 underline">{player.character_name}</p >
                                    <p className="f3 ttu tracked mt0 mb1">{player.class}</p>
                                </div>
                            </div>    
                            <div className="flex justify-between items-end pt3">
                                <div className="tc f2 mister br3 border-main pa1">
                                    <span>{player.str}</span>
                                    <Str />
                                </div>
                                <div className="tc f2 mister br3 border-main pa1">
                                    <span>{player.end}</span>
                                    <End />
                                </div>
                                <div className="tc f2 mister br3 border-main pa1">
                                    <span>{player.agi}</span>
                                    <Agi />
                                </div>
                                <div className="tc f2 mister br3 border-main pa1">
                                    <span>{player.cha}</span>
                                    <Cha />
                                </div>
                                <div className="tc f2 mister br3 border-main pa1">
                                    <span>{player.aur}</span>
                                    <Aur />
                                </div>
                                <div className="tc f2 mister br3 border-main pa1">
                                    <span>{player.tho}</span>
                                    <Tho />
                                </div>
                                <div className="relative flex justify-center items-center tc">
                                    <span className="absolute f1 mister black ">{player.life}</span>
                                    <Heart />
                                </div>
                                
                                
                                
                                
                            </div>    
                        </div>
                    ))}
                <Twinklestar />
                <Twinklegram
                    strings={[
                        `Rainbow Company... MOUNT UP!!`,
                        
                    ]}
                />
                </div>
            
        )}
    </Query>
);