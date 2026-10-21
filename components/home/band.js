// One faded navy background behind Our Process, Industries and Reviews, so
// the three read as one block: black at the very top and bottom so it melts
// into the black sections around it, deep navy all the way through the
// middle, with a soft blue glow behind each section. The fades are fixed
// heights (not percentages) so they look the same however tall the block
// is. Solid stops only — see-through ones let the page's white background
// show as grey stripes.
const NAVY_BLOCK =
  "radial-gradient(70% 14% at 50% 16%, rgba(11, 96, 176, 0.2), transparent 100%), " +
  "radial-gradient(70% 14% at 50% 50%, rgba(11, 96, 176, 0.16), transparent 100%), " +
  "radial-gradient(70% 14% at 50% 84%, rgba(11, 96, 176, 0.2), transparent 100%), " +
  "linear-gradient(to bottom, #000000 0, #03070e 70px, #050e1a 140px, #06101f 220px, #06101f calc(100% - 220px), #050e1a calc(100% - 140px), #03070e calc(100% - 70px), #000000 100%)";

export default function NavyBlock({ children }) {
  return (
    <div className="text-white" style={{ background: NAVY_BLOCK }}>
      {children}
    </div>
  );
}
