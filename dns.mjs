import dns from 'dns/promises'

const dnsObj = await dns.lookup('www.dinus.ac.id')

console.info(dnsObj)
