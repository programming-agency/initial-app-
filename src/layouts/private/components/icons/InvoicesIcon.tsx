import React from 'react'

export default function InvoicesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="24" height="24" fill="url(#patternInvoice)"/>
    <defs>
    <pattern id="patternInvoice" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_5_2148" transform="scale(0.00195312)"/>
    </pattern>
    <image id="image0_5_2148" width="512" height="512" xlinkHref="data:image/png;base64,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2xF6AhCl1u4toSegyBEAyMnaLZtDTwCi9HbHptATUOQIAOTkpZa3Q08AovRyy9rQE1DkCADk5JGNK0JPAKL00IaXQ09AkSMAkJNF7z4tl4eeAUTF5brj3adDz0CRIwCQk9fb3tUjG18JPQOIykMbXtbq9vWhZ6DIEQDI2b++tjD0BCAqv+Y2hzwgAJCzxe8+o/s3vBh6BhCFJetf0D3vPRd6BkoAAYC8uODZ2Wrsags9Ayhpm7padcFzs0PPQIkgAJAXr7W9q6l/+K26PQ09BShJWU91zlNX6I2290JPQYkgAJA3S9Y/r++/cD2fCgDyzOX62+ev013vPRt6CkoIAYC8+t2qe3Xa8svU3N0eegpQElqzHZry5OW6cvWS0FNQYggA5N3id5/RuMd+rhea3wo9BShqL7es1QmP/Ey3vfNE6CkoQQQAesSzTW/qqId+rPOfmam3tnDOcuDTeKejUT948f/pyAd/pOea14SegxLFd7mix2Q91e/XPKQb335c44ccpK/sNEbHDNib7zEHPsLGzhbdv+FF3frOci1a95S2pF2hJ6HEEQDocVvSLt28dpluXrtMJtMulQM0onKQ6sor1YfvNEfEOtIuNXW164329VrTviH0HESGAECvcrnWtG/gzg4AAuMYAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIkQAAAAQIQIAAIAIEQAAAESIAAAAIEIEAAAAESIAAACIEAEAAECECAAAACJEAAAAECECAACACBEAAABEiAAAACBCBAAAABEiAAAAiBABAABAhAgAAAAiRAAAABAhAgAAgAgRAAAARIgAAAAgQgQAAAARIgAAAIgQAQAAQIQIAAAAIhRNAHRmMp2hNwAAioMl2ZJ/zIgmAGqtvSn0BgBAcUjdSv4xI5oAWDf22lZJ3aF3AAAKX7kyBECJKfn/oQCA3LmX/qvGsQXAhtADAAAFr7uxes/m0CN6WlwBYHox9AQAQMF7Rcc1lPxbxlEFgEnPht4AAChsZvZc6A29IaoASAkAAMBWpJ4+H3pDb4gqAJRmngk9AQBQ6BJeASg1LROufEnSmtA7AAAFK2sd3feFHtEbogoAmVymhaFnAAAKlT3WPPmaKD4xFlcASJLr9tATAACFyheEXtBboguA5taWe1xqC70DAFB40iRLAJSs0+a2m2lu6BkAgMJi0lOtJ14TzcHi8QWApKySy0JvAAAUFpf+LfSG3hRlALSNv+oPcj0UegcAoGBsrE3Lbwg9ojdFGQCS5Il4FQAA8D6z37096Yqojg+LNgBalg6/WdLy0DsAAMFtVrbsl6FH9DYLPSCkmgVnH2NK71Pk/x16j22SfLVJ70naINdGJdroqW/7t26ZDZD0/i/TAKUaLNPukip7aDTwSVolvW5u65Roo7tvlHyTXJu39QeYVC3TgFQ2QKYB5jZI8mGSBvfcbPwFs4uax8/8VegZvS36B766BdNvcOm00DtKi6+V2TJ3fzKRXlGaedW7ulb25Mk1Km+fuksmKR9plh0lJXvKfYykQyXV99RlIiqN5rbcLV0mt5eUpK+mbitbJ8x6p6cusP9d59anW7pGZs1HmtkouQ6RaYyk4T11mZF6pbm1ZT+dNrcz9JDeFn0A9Ftw9vCs0uclVYfeUqRc0jMy3eWpP5ott2XtY69+M/QoSVJDQ1J76Bt7WqIxLjtK8i9KtlvoWSgKq2RabO4PeZIsbR43c4VMHnqUJNUsnrJD0lUxRsoe7mYnSBojKRN6VxGb1Dzh6vmhR4QQfQBIUt3CGVPdfXboHUVko5nd6a7F2UzZ4rZxV6wNPWhb1S6asZel6TiXjZV0nKS+oTehIHS6aUniWpx65o6WiVe+GHrQtqq74+wBada/YPJxkk6UtGPoTUXkP5snXP3N0CNCIQD+qHbh9FlynRV6RwHbIulud7+mpa11Xim8XNb/rnPrs13dX3b3UyWNk1QWehN6mz1hSq9Nza5vGX/1e6HX5KyhIak9fPWRnvqpZjpTroGhJxUs1/O1Xn5YbEf+/zkC4I+GLJ5S3dZdtlTSvqG3FJhH5LqiPOm8ZeP465pCj+kplbdP3aUsU/Y1uX9D0h6h96DnmPRm6vrPMkt+v3nCVatC7+kxS6b1rWm3ieZ2tuRjxf39n7jUpkx6WMu42c+H3hISV4i+eLDHAAAGIUlEQVQ/U7toxl5K/QFJO4TeElinpDmW+L81nThrWegxvaqhIakds2q8SRe4dLy4jZQQe9g9vaylesQtOq6hO/Sa3lR7+7S9zex/uWmqON4p66avtYy/+sbQQ0Ljzu0DqhdMOyiRLZHUL/SWAJrN9G/dSfl/FNP7+j2l5o6zPmPZ5LuSpoi3B4qVm9mN5vrnxgkzoz/vR79bpvXLViRfl/wixflExyWd2zzh6itDDykEBMBHqFsw/XB33S1TTegtvaRDptlpV+ZHrV++cl3oMYWm36JpI7JuP5DrbHG0ddEw6W7z9O8aJ85+IvSWQjNk8ZTqtq7Mt2TJ9yXvH3pP77HvNU+Y+S+hVxQKAuBj1Cycfqy5btb7J50pVR0mv7I7U/EznvFvXc38s/ezJP2JXF8Rt53CZbpPSi9uHj/74dBTCl2/W6b1S8v1HTe7QFJd6D09yOX+g+aJs34Rekgh4U7sE9TdcfYoz6a3Sdon9JY8a3JpVjbN/nP7pGveCj2m2FQvmLZ/ouRvJT9DvCJQQOxhWfqL5vGzbg+9pNgMmjejtrMsneGyiyTtGnpPnnWYfEbThFnXhx5SaAiArRiw8My6Li+/XrIJobfkzteakiuSzvRfN580a5tPVYqPVrNw+r7m9neSny6OEQjGpLs9tR81T5r5aOgtRW/OqRV1NbVf89S/J9NnQs/JmWmDUj+peeKsB0NPKUQEwLZY0lBW17b6Ypf/UFJ56Dmfkst0v0v/t2WH8ps1+oqu0INKTe2CqXvKMj+U63RJFaH3RCKV7LbEs//Ae/w9wGV1i2aMc/fzJY1XEX5xnJsWZzP6esGcmbQAEQCfwvsv/dpMSaNDb9kGjTLdkLr/pnXCrGdDj4lB9bxzhiSZ7mky+6akEaH3lKjNLl2TcbusceLM10KPiUHVvBk7ZzLpFJl9S8Xx9kCj3L7XPGHm7wrl9M2FigD4tJafW17zTtf3zPR9SbWh53xA1uX3JNLvm1pbb9Rpc9tDD4rSnFMztdU1E910nrlOUBE+eypAj5jZ5U2qvlHj/70j9JgozTm1oq665uRUPs1kx6vwjn9xuW7qTjIXto+/ck3oMcWAANhOtTdPHag+yUVy+1b4jwv6UpOuz0o39OS3k+HTq7vj7FHe7dNl/lVJI0PvKSqmt90111O7unXSzKdDz8H/qJo3Y+dMmc6U+1kFcKyAy3R76v7j1gmzngq8pagQADmqWTh9sKX2v2V+lqRdeuliU0mPyf02K8vc1DTuqld76XKRg/oFM0an5l+V61Txla4fZ53JbkplN7QsG/qQGhrS0IPwyernn3VomiRfk/vJvfxtm1vM7FZz/YqTPG0fAiBfGhqS6tGrP5+YT5Frcr5fFXCpzaS7ZH6bZ7LzW8Ze+24+fz56kctq58/4rJI/fQlRqX3M9NN6Q9LiNEnntja33afT5mZDD8L2qb99+iGp2ckyP1nSXj1wES7Xw0r8mrLyijmbTriisQcuIxoEQE9Y+O0+tdY6RqkfLdfnZDpKUv2n/CmNkj8k14OSPdjc1rK8FL6BDx9WufCcXcs8e4JLJ5j0BUmDQ2/qYY2SLXFP70pcdzVNmvVK6EHIv9rbp+2tjI6W60jJjtD2BYHL9YKZ3Z+aP5Am5Q9w0rL8IQB6Sc3iKTtkupKhaWJDzW2Yu1f++T83s3aXVmUtWZ3JZt5snnTF+lBbEVBDQ1J/6KqD3OyYVOloMxut97+dsJgPJHxDruWSL5fswebq4Utj+zIevH/clPVN9khT7ZyY7eryXWX2l0+M3FpMvsrNX08tXdXHs2+U8reQhkYAAAVuwMIz6zqz5YeY2WgzjXZpb7lGhj/49EO2yLVSppfd9WQiLffO7PLmyddsCD0MwIcRAECRqp53zpCkvGuU0mSUyUe62W6SDZLSAe//VQP16d96+jjNkja6aYPc10u23qRVclvpnq7MZspebT/xyrf43DVQPAgAoJQtaSir6Vw5INNVXiNJqacVifknfh98NknaM6ltkaRuS9taW1s3cvwJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIvT/AXSR3gsTF0gkAAAAAElFTkSuQmCC"/>
    </defs>
    </svg>
  )
}