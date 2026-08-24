export const submissionTemplate = {
    html: `<body style="margin:0; padding:0; background-color:#f3ece0; font-family:'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing:antialiased;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
    New offer request from {{FULL_NAME}} - {{CATEGORY}}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3ece0; padding:32px 12px;">
    <tr>
      <td align="center">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background-color:#ffffff; border:1px solid #ded2bd; border-radius:14px; overflow:hidden;">

          <tr>
            <td align="center" style="background-color:#fbf8f2; padding:34px 40px 26px; border-bottom:1px solid #ded2bd;">
              <!-- Real logo image. DEV: host the logo on the site and use the full absolute URL.
                   Example: https://instagoldbuyers.com/assets/logo.png
                   Email clients require an absolute https URL, not a relative path. -->
              <img src="{{LOGO_URL}}" alt="InstaGold Buyers" width="240"
                   style="display:block; width:240px; max-width:70%; height:auto; margin:0 auto;" />
            </td>
          </tr>

          <tr>
            <td style="padding:30px 40px 6px;">
              <div style="text-transform:uppercase; letter-spacing:3px; font-size:11px; color:#a8802f; font-weight:bold;">
                New Offer Request
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif; font-size:24px; color:#1d1a15; margin-top:8px;">
                A customer wants an offer
              </div>
              <div style="font-size:14px; color:#6e6151; margin-top:6px;">
                Submitted through the Get Your Free Offer form on instagoldbuyers.com
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:22px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#9a8a74; margin-bottom:6px;">
                      What they are selling
                    </div>
                    <div style="display:inline-block; background-color:#c9a24b; color:#1d1a15; font-size:16px; font-weight:bold; padding:8px 18px; border-radius:8px;">
                      {{CATEGORY}}
                    </div>
                  </td>
                </tr>

                <tr><td style="border-top:1px solid #eee4d3; font-size:0; line-height:0; height:1px;">&nbsp;</td></tr>

                <tr>
                  <td style="padding:16px 0;">
                    <div style="font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#9a8a74; margin-bottom:5px;">
                      Full name
                    </div>
                    <div style="font-size:17px; color:#1d1a15; font-weight:600;">
                      {{FULL_NAME}}
                    </div>
                  </td>
                </tr>

                <tr><td style="border-top:1px solid #eee4d3; font-size:0; line-height:0; height:1px;">&nbsp;</td></tr>

                <tr>
                  <td style="padding:16px 0;">
                    <div style="font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#9a8a74; margin-bottom:5px;">
                      Email or phone
                    </div>
                    <div style="font-size:17px; color:#1d1a15; font-weight:600;">
                      <a href="mailto:{{CONTACT}}" style="color:#a8802f; text-decoration:none;">{{CONTACT}}</a>
                    </div>
                  </td>
                </tr>

                <tr><td style="border-top:1px solid #eee4d3; font-size:0; line-height:0; height:1px;">&nbsp;</td></tr>

                <tr>
                  <td style="padding:16px 0 4px;">
                    <div style="font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#9a8a74; margin-bottom:5px;">
                      Weight, karat or description
                    </div>
                    <div style="font-size:15px; color:#3d372e; line-height:1.6; background-color:#faf7f1; border:1px solid #eee4d3; border-radius:8px; padding:14px 16px;">
                      {{DESCRIPTION}}
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:14px 40px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="background-color:#c9a24b; border-radius:9px;">
                    <a href="mailto:{{CONTACT}}"
                       style="display:inline-block; font-size:14px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#fffdf7; text-decoration:none; padding:14px 34px;">
                      Reply to Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#fbf8f2; border-top:1px solid #ded2bd; padding:20px 40px; text-align:center;">
              <div style="font-size:13px; color:#6e6151; line-height:1.7;">
                <strong style="color:#1d1a15;">InstaGold Buyers</strong><br />
                31 W 47th Street, Suite 202, New York, NY 10036<br />
                (212) 901-5705 &nbsp;&middot;&nbsp; Mon to Fri, 9am to 5pm
              </div>
              <div style="font-size:11px; color:#9a8a74; margin-top:12px;">
                This lead was submitted {{SUBMITTED_AT}} via instagoldbuyers.com
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>`
};