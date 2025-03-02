import React from 'react'

export const Popup = ({ copied }) => {
  return (
    <section>
        {copied && (
            <div style={{
                position: 'absolute',
                bottom: '3rem'
            }}>Copied To Clipboard</div>
        )}
    </section>
  )
}
