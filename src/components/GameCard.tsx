import './GameCard.css';

export function GameCard({ homeTeam, awayTeam, competition, round, date, time, stadium, homeLogo, awayLogo }: {
  homeTeam: string;
  awayTeam: string;
  competition: string;
  round?: string;
  date: string;
  time: string;
  stadium: string;
  homeLogo: string;
  awayLogo: string;
}) {
  return (
    <div className="game-card">
      <div className="game-card-header">
        <img src={homeLogo} alt={homeTeam} className="team-logo" />
        <img src={awayLogo} alt={awayTeam} className="team-logo" />
      </div>
      <div className="game-card-body">
        <p className="competition-name">{competition}</p>
        {round && <p className="game-round">{round}</p>}
        <p className="game-datetime">
          📅 {date}, 🕒 {time}
        </p>
        <p className="game-stadium">📍 {stadium}</p>
        <a href="#" className="game-details">Mais</a>
      </div>
    </div>
  );
}
