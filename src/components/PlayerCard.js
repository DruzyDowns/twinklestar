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

export const GET_PLAYERS = gql`
  query GetPlayers {
    players {
      id
      player_name
      character_name
      class
      life
    }
  }
`;

export default () => (
    <Query query={GET_PLAYERS}>
        {({ loading, data }) => !loading && (
            
            <div className="card-grid">
                    {data.players.map(player => (
                        <div className="player-card">
                            <div className="">
                                <p>{player.character_name}</p >
                                <p>{player.class}</p>
                            </div>    
                            <div className="flex justify-between">
                                <div className=""><Str /></div>
                                <div className=""><End /></div>
                                <div className=""><Agi /></div>
                                <div className=""><Cha /></div>
                                <div className=""><Aur /></div>
                                <div className=""><Tho /></div>
                                <div className=""><Heart /></div>
                                
                                
                            </div>    
                            
                            
                            <p>{player.player_name}</p>
                            <p>{player.life}</p>
                        </div>
                    ))}
                </div>
            
        )}
    </Query>
);