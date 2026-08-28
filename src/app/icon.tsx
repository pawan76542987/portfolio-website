import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#080a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
          borderRadius: '8px',
          border: '2px solid #38bdf8',
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        PU
      </div>
    ),
    {
      ...size,
    }
  );
}
