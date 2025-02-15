import './PlayerCard.css';

export function PlayerCard({
  name,
  position,
  goals,
  assists,
  saves,
  photo
}: {
  name: string;
  position: string;
  goals: number;
  assists: number;
  saves: number;
  photo: string;
}) {
  return (
    <div className="player-card">
      <img src={photo} alt={name} className="player-photo" />
      <p className="name">{name}</p>
      <p className="position">{position}</p>
      <div className="stats">
        <span>⚽ {goals} Gols</span>
        <span>🎯 {assists} Assistências</span>
        <span>🛑 {saves} Defesas</span>
      </div>
    </div>
  );
}
