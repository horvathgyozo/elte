import { useEffect, useState } from "react";
import { Modal } from "semantic-ui-react";

function Field({ label, placeholder, name, value, onChange, ...attrs }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        type="text"
        placeholder={placeholder}
        {...attrs}
      />
    </div>
  );
}

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ open, onClose, onSubmit, track }) {
  const [formState, setFormState] = useState(defaultState);

  useEffect(() => {
    if (open) {
      setFormState({ ...defaultState, ...track });
    }
  }, [open, track]);

  const handleFieldChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    onClose();
  };

  return (
    <Modal
      as="form"
      closeIcon
      className="ui modal"
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="header">Add new Track</div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field
                value={formState.artist}
                name="artist"
                label="Author"
                placeholder="John Williams"
                onChange={handleFieldChange}
                required
              />
              <Field
                value={formState.title}
                name="title"
                label="Track name"
                placeholder="Imperial March"
                onChange={handleFieldChange}
                required
              />
              <Field
                value={formState.length}
                name="length"
                label="Length"
                placeholder="3:44"
                onChange={handleFieldChange}
              />
            </div>
            <div className="three fields">
              <Field
                value={formState.spotifyURL}
                name="spotifyURL"
                label="Spotify URL"
                placeholder="https://"
                onChange={handleFieldChange}
              />
              <Field
                value={formState.lyricsURL}
                name="lyricsURL"
                label="Lyrics URL"
                placeholder="https://"
                onChange={handleFieldChange}
              />
              <Field
                value={formState.chordsURL}
                name="chordsURL"
                label="Guitar tab URL"
                placeholder="https://"
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <button
          type="button"
          onClick={onClose}
          className="ui black deny button"
        >
          Cancel
        </button>
        <button type="submit" className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </button>
      </div>
    </Modal>
  );
}
