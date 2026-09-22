/**
 * ⚡ Raju-V3 ⚡
 * Owner Information Command
 * Developed by Raju
 */
module.exports = {
    name: 'owner',
    aliases: ['creator', 'developer', 'dev'],
    category: 'Information',
    desc: 'Show bot owner & developer profile contact info',
    kaif_handler: async (kaif_sock, kaif_origin, context) => {
        const { kaif_msg } = context;

        const ownerText = `👑 *Raju-V3 OFFICIAL OWNER PROFILE* 👑\n\n` +
            `👤 *Developer & Creator:* Raju\n\n` +
            `📞 *Super Owner Contacts:*\n` +
            `  • +92 307 1782626 (Primary)\n` +
            `  • +92 307 1782626\n` +
            `  • +92 307 1782626\n\n` +
            `💬 *Direct WhatsApp Links:*\n` +
            `  • wa.me/923071782626\n` +
            `  • wa.me/923071782626\n` +
            `  • wa.me/923071782626\n\n` +
            `> _Raju-V3 • Developed with ❤️ by Raju_`;

        const vcard = `BEGIN:VCARD\n`
            + `VERSION:3.0\n`
            + `N:Chaudhary;Kaif;;;\n`
            + `FN:Raju x Boss\n`
            + `ORG:Raju-V3 Developer;\n`
            + `TEL;type=CELL;type=VOICE;waid=923071782626\n`
            + `TEL;type=CELL;type=VOICE;waid=923071782626\n`
            + `TEL;type=CELL;type=VOICE;waid=923071782626\n`
            + `END:VCARD`;

        try {
            await kaif_sock.sendMessage(kaif_origin, {
                contacts: {
                    displayName: 'Raju Boss',
                    contacts: [{ vcard }]
                }
            });
        } catch (e) {}

        await new Promise(r => setTimeout(r, 200));

        try {
            return await kaif_sock.sendMessage(kaif_origin, { text: ownerText }, { quoted: Raju_msg });
        } catch (e) {
            return await kaif_sock.sendMessage(kaif_origin, { text: ownerText });
        }
    }
};
