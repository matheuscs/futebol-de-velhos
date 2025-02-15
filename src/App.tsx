import { useState, useEffect } from 'react';
import { PlayerCard } from './components/PlayerCard';
import { GameCard } from './components/GameCard';
import './App.css';

function App() {
  const [players, setPlayers] = useState<
    { id: number; name: string; position: string; rating: number; goals: number; saves: number; assists: number; photo: string; }[]
  >([]);

  const [games, setGames] = useState<
    { id: number; homeTeam: string; awayTeam: string; competition: string; round?: string; date: string; time: string; stadium: string; homeLogo: string; awayLogo: string }[]
  >([]);

  useEffect(() => {
    fetch("./data/players.json")
      .then((response) => response.json())
      .then((data: { id: number; name: string; position: string; rating: number; goals: number; saves: number; assists: number; photo: string; }[]) => {
        const sortedPlayers = data.sort((a, b) => b.rating - a.rating);
        setPlayers(sortedPlayers);
      })
      .catch((error) => console.error("Erro ao carregar jogadores:", error));
  }, []);
  
  useEffect(() => {
    fetch("./data/games.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Erro ao carregar jogos:", error));
  }, []);

  return (
    <div className="container">
      <header>
        <img src="./logo/image_colored_removed_text.webp" alt="Time Logo" className="logo" />
      </header>
      <section className="team-photo">
        <img src="./pics/team-photo.jpg" alt="Time" />
      </section>
      <section className="games">
        <h1>Próximos Jogos</h1>
        <div className="games-list">
          {games.length > 0 ? (
            games.map((game) => <GameCard key={game.id} {...game} />)
          ) : (
            <p>Carregando jogos...</p>
          )}
        </div>
      </section>
      <section>
        <h1>Jogadores</h1>
        <section className="players-grid">
          {players.map((p) => (
            <PlayerCard key={p.id} name={p.name} position={p.position} goals={p.goals} assists={p.assists} saves={p.saves} photo={p.photo} />
          ))}
        </section>
      </section>
      <section className="contact">
        <h2>Entre em Contato</h2>
        <p>Email: contato@timefutebol.com</p>
      </section>
    </div>
  );
}

export default App;
