import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export function Track({ track, onEdit, onDelete, playlists, onSelect }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    if (e && e.target && e.target.matches(".dropdown *:not(.icon)")) return;
    setOpen(false);
  };

  return (
    <tr>
      <td>
        <i className="user icon"></i> {track.artist}
      </td>
      <td>
        <i className="music icon"></i> {track.title}
      </td>
      <td className="right aligned collapsing">
        <Dropdown
          icon="plus"
          className="ui icon top right pointing dropdown button"
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <Dropdown.Menu className="menu">
            <div className="header">Add to playlist</div>
            <div className="ui search icon input">
              <i className="search icon"></i>
              <input
                type="text"
                name="search"
                placeholder="Search playlists..."
              />
            </div>
            {playlists.map((playlist) => (
              <div
                onClick={() => onSelect(playlist.id, track.id)}
                className="item"
                key={playlist.id}
              >
                {playlist.title}
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button onClick={() => onEdit(track)} className="ui icon button">
          <i className="edit icon"></i>
        </button>
        <button onClick={() => onDelete(track)} className="ui icon button red">
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
}
